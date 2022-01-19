import React, {
  ComponentType,
  createElement,
  forwardRef,
  ReactNode,
} from 'react'
import { compile, serialize, middleware } from 'stylis'
import { getKeyframes } from './keyframes'
import { getTheme, withStyle } from '../theme/utils/style'
import { Box, BoxProps } from '../components/Box'

const domElement: Record<string, typeof Box> = {
  div: Box,
}

// TODO props any
const resolveSx = (props: any) => {
  const { sx = {}, ...rest } = props
  const theme = getTheme()
  let resolvedSx = { ...sx }
  Object.keys(resolvedSx).forEach((key) => {
    const value = resolvedSx[key]
    if (typeof value === 'function') {
      delete resolvedSx[key]
      const newSx = value({ theme, ...rest })
      if (typeof newSx === 'object') {
        resolvedSx = { ...resolvedSx, ...newSx }
      } else if (typeof newSx === 'string' || typeof newSx === 'number') {
        resolvedSx[key] = newSx
      }
    } else if (typeof value === 'object') {
      resolvedSx[key] = resolveSx({ sx: value, ...rest })
    }
  })
  return resolvedSx
}

const resolveAnimationKey = (animationValue: string) =>
  animationValue.split(' ')[0]
const resolveAnimation = (sx: any) => {
  const keyframesList: string[] = getKeyframesList(sx)
  if (keyframesList.length > 0) {
    const keyframesStyle = keyframesList
      .map((keyframes) => {
        const keyframesAnimation = getKeyframes(keyframes)
        return keyframesAnimation || ''
      })
      .join(';')
    return keyframesStyle
  }
  return undefined
}
const getKeyframesList = (sx: any) => {
  const keyframesList: string[] = []
  const doResolve = (_sx: any) => {
    if (_sx.animation) {
      keyframesList.push(resolveAnimationKey(_sx.animation))
    }
    Object.keys(_sx).forEach((key) => {
      if (typeof _sx[key] === 'object') {
        doResolve(_sx[key])
      }
    })
  }
  doResolve(sx)
  return keyframesList
}
const theme = getTheme()
// TODO don't use BoxProps as default
type DefaultType<T> = T extends unknown ? BoxProps : T
type Merge<T, P> = Omit<DefaultType<T>, keyof P> & P

function styled<P>(baseComponent: ComponentType<P>) {
  return function <T>(strings, ...interpolations) {
    const StyledComponent = forwardRef<
      any,
      Omit<Merge<P, T>, 'theme'> & { children?: ReactNode }
    >((props, ref) => {
      const normalizeRawStyle = (strings, ...interpolations) => {
        const result = [strings[0]]
        for (let i = 0; i < interpolations.length; i++) {
          const interpolation =
            typeof interpolations[i] === 'function'
              ? interpolations[i]({ ...props, theme })
              : interpolations[i]
          result.push(interpolation + strings[i + 1])
        }
        const sx = {}
        serialize(
          compile(result.join('')),
          middleware([
            (element) => {
              if (element.type === 'decl') {
                sx[element.props] = element.children
              } else if (element.type === 'rule') {
                const value = element.children
                  .filter((item) => item.type === 'decl')
                  .reduce((acc, curr) => {
                    acc[curr.props] = curr.children
                    return acc
                  }, {})
                element.props.forEach((key) => {
                  sx[`&${key}`] = value
                })
              }
            },
          ]),
        )
        return sx
      }
      const sx = normalizeRawStyle(strings, ...interpolations)
      const isUikitComponent = true // TODO
      const newSx = resolveSx({ sx, ...props })
      const keyframesStyle = resolveAnimation(newSx)
      const styledBaseComponent = isUikitComponent
        ? baseComponent
        : withStyle(baseComponent)
      const Component = createElement(styledBaseComponent as any, {
        // ...attrs,
        ...props,
        ref,
        sx: { ...newSx, ...(props as any).sx },
      })
      if (keyframesStyle) {
        return (
          <>
            {Component}
            <style
              dangerouslySetInnerHTML={{
                __html: keyframesStyle,
              }}
            />
          </>
        )
      }
      return Component
    })
    return StyledComponent
  }
}
type BaseStyled = typeof styled
const enhancedStyled = styled as BaseStyled & {
  [key in keyof typeof domElement]: ReturnType<BaseStyled>
}
Object.keys(domElement).forEach((key) => {
  enhancedStyled[key] = styled(domElement[key])
})
export default enhancedStyled
