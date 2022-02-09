// @ts-nocheck
import React, { ComponentType, useEffect, useContext, forwardRef } from 'react'
import Taro from '@tarojs/taro'
import css, { cssProps, get } from './css'
import { BoxProps } from '../../components/Box/types'
import hash from 'object-hash'
import flatten from 'obj-flatten'
import { StyleContext } from '../context/StyleContext'
import useTheme from '../hooks/useTheme'

export const objToString = (o) => {
  let value = JSON.stringify(o)
  value = value
    .replace(/"/g, '')
    .replace(/},/g, '}')
    .replace(/,/g, ';')
    .replace(/:{/g, '{')
    .replace(/^{/, '')
    .replace(/}$/, '')
    .replace(/%998/g, '"')
    .replace(/%10086/g, ',')
  return value
}

const convert = (style) => {
  let v = flatten(style, ' ')
  let o = {}
  Object.keys(v).forEach((el) => {
    let arr: Array<string> = el.split(' ')
    let key: string = arr.pop() || ''
    let val = v[el]
    if (typeof val === 'string') {
      val = val.replace(/"/g, '%998').replace(/,/g, '%10086')
    }
    if (typeof key === 'string') {
      key = key.replace(/([a-z]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
    }
    if (o[arr.join(' ')]) {
      o[arr.join(' ')][key] = val
    } else {
      o[arr.join(' ')] = { [key]: val }
    }
  })
  Object.keys(o).forEach((el) => {
    // adaption for bmp css
    let newEl = el
      .replace(/ &/g, '')
      .replace(/\>button/g, ' bn-button')
      .replace(/:disabled/g, '[disabled=true]')
      .replace(/div/g, 'bn-view')
    if (el !== newEl) {
      o[newEl] = o[el]
      delete o[el]
    }
  })
  return { value: JSON.stringify(o), o }
}
export const resolveAllStyle = (props, __styledCss, theme) => {
  const { sx = {}, __css = {}, variant = 'default', tx = 'variants', __styledCss: propsStyledCss = {}, ...rest } = props

  // get style props and rest props
  const styleProps = {}
  for (let i in rest) {
    if (i in cssProps) {
      styleProps[i] = rest[i]
      delete rest[i]
    }
  }

  // by the order of priority
  const baseStyle = css(__css)({ theme })
  const styledStyle = css(__styledCss)({ theme })
  const variantStyle = css(get(theme, tx + '.' + variant, get(theme, variant)))({ theme })
  const sxStyle = css(sx)({ theme })
  const propsStyle = css(styleProps)({ theme })
  const style = {
    ...baseStyle,
    ...variantStyle,
    ...styledStyle,
    ...sxStyle,
    ...propsStyle,
    ...propsStyledCss,
  }
  return style
}
export function useStyle(props: BoxProps) {
  const { __styledCss: style, ...rest } = props
  const test: string = hash(JSON.stringify(style))
  const classname: string = `bn${test.slice(0, 8)}`
  rest.className = rest?.className ? `${rest.className} ${classname} bn ba` : `ba bn ${classname}`
  let { value, o } = convert({ [`.${classname}.bn.ba`]: style })
  value = value
    .replace(/"/g, '')
    .replace(/},/g, '}')
    .replace(/,/g, ';')
    .replace(/:{/g, '{')
    .replace(/^{/, '')
    .replace(/}$/, '')
    .replace(/%998/g, '"')
    .replace(/%10086/g, ',')
  const { dispatch } = useContext(StyleContext)
  useEffect(() => {
    if (value) {
      dispatch({ type: 'stylechange', payload: { o } })
    }
  }, [rest.className, value])
  return { style, rest, value }
}

export function withStyle<T, P extends BoxProps = BoxProps>(
  Component: ComponentType<P>,
  { needResolved = false } = {},
) {
  const WrappedComponent = forwardRef<any, T>((props, ref) => {
    const theme = useTheme()
    if (needResolved) {
      const newStyledCss = resolveAllStyle(props, {}, theme)
      props.__styledCss = newStyledCss
    }
    const { rest } = useStyle(props)

    return (
      <>
        <Component ref={ref} {...rest} />
      </>
    )
  })
  return WrappedComponent
}
