import React, {
  ComponentType,
  createElement,
  forwardRef,
  ReactNode,
} from 'react'
import { SxStyleProp } from '../../components/Box/types'
import { getKeyframes } from './keyframes'
import { getTheme, withStyle } from './style'

interface StyledParams {
  displayName?: string
  sx: SxStyleProp
  isUikitComponent?: boolean
  attrs?: any // TODO
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
type Merge<T, P> = Omit<T, keyof P> & P
function styled<P>(baseComponent: ComponentType<P>) {
  return function <T>({
    displayName,
    sx,
    attrs,
    isUikitComponent = true,
  }: StyledParams) {
    const StyledComponent = forwardRef<
      any,
      Merge<P, T> & { children?: ReactNode }
    >((props, ref) => {
      const newSx = resolveSx({ sx, ...props })
      const keyframesStyle = resolveAnimation(newSx)
      const styledBaseComponent = isUikitComponent
        ? baseComponent
        : withStyle(baseComponent)
      const Component = createElement(styledBaseComponent as any, {
        ...attrs,
        ...props,
        ref,
        __css: { ...newSx, ...(props as any).__css },
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
    StyledComponent.displayName = displayName || 'Styled'
    return StyledComponent
  }
}

export default styled
