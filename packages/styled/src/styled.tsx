import React, {
  ComponentType,
  createElement,
  forwardRef,
  ReactNode,
  useMemo,
} from 'react'
import { compile, serialize, middleware } from 'stylis'
import { Input as MpInput, Button as MpButton } from '@binance/mp-components'
import { getKeyframes } from './keyframes'
import { withStyle, objToString } from './utils/style'
import { Svg } from './components/Svg'
import { Box, BoxProps } from './components/Box'
import useTheme from './hooks/useTheme'

const domElement: Record<string, [any, { isStyled: boolean }]> = {
  div: [Box, { isStyled: true }],
  svg: [Svg, { isStyled: false }],
  input: [MpInput, { isStyled: false }],
  button: [MpButton, { isStyled: false }],
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

// TODO don't use BoxProps as default
type MergeBox<T> = Merge<BoxProps, T>
type Merge<P, T> = Omit<P, keyof T> & T

function styled<P>(
  baseComponent: ComponentType<P>,
  { isStyled = true }: { isStyled?: boolean } = {},
) {
  let attrs: any = {}

  const styledBaseComponent = isStyled
    ? baseComponent
    : withStyle(baseComponent)
  function createdStyled<T>(strings, ...interpolations) {
    const StyledComponent = forwardRef<
      any,
      Omit<MergeBox<Merge<P, T>>, 'theme'> & { children?: ReactNode }
    >((_props, ref) => {
      const props = { ...attrs, ..._props }
      const { __styledCss: propsStyledCss } = props
      const theme = useTheme()
      const normalizeRawStyle = (strings, ...interpolations) => {
        const result = [strings[0]]
        for (let i = 0; i < interpolations.length; i++) {
          let interpolation =
            typeof interpolations[i] === 'function'
              ? interpolations[i]({ ...props, theme })
              : interpolations[i]

          interpolation =
            typeof interpolation === 'boolean' ||
            typeof interpolation === 'undefined'
              ? ''
              : interpolation
          interpolation =
            typeof interpolation === 'object'
              ? `${objToString(interpolation)};`
              : interpolation

          result.push(interpolation + strings[i + 1])
        }
        const sx = {}
        serialize(
          compile(result.join('')),
          middleware([
            (element) => {
              if (element.type === 'decl') {
                sx[element.props] = element.children
              } else if (element.type === 'rule' || element.type === '@media') {
                const value = element.children
                  .filter((item) => item.type === 'decl')
                  .reduce((acc, curr) => {
                    acc[curr.props] = curr.children
                    return acc
                  }, {})
                const prefix = (() => {
                  if (element.type === '@media') {
                    return '@media '
                  }
                  const [selector] = element.props
                  if (selector[0] === '.') {
                    return '& '
                  }
                  return '&'
                })()
                element.props.forEach((key) => {
                  sx[prefix + key] = value
                })
              }
            },
          ]),
        )
        return sx
      }
      const sx = normalizeRawStyle(strings, ...interpolations)
      const keyframesStyle = resolveAnimation(sx)
      const newStyledCss = useMemo(
        () => ({ ...sx, ...propsStyledCss }),
        [sx, propsStyledCss],
      )
      const Component = createElement(styledBaseComponent as any, {
        ...props,
        ref,
        __styledCss: newStyledCss,
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
  createdStyled.attrs = (_attrs) => {
    attrs = _attrs || {}
    return createdStyled
  }
  return createdStyled
}
type BaseStyled = typeof styled
const enhancedStyled = styled as BaseStyled & {
  [key in keyof typeof domElement]: ReturnType<BaseStyled>
}
Object.keys(domElement).forEach((key) => {
  const value = domElement[key]
  enhancedStyled[key] = styled(...value)
})
export default enhancedStyled
