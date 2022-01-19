// @ts-nocheck
import React, { ComponentType, useEffect, useContext, forwardRef } from 'react'
import Taro from '@tarojs/taro'
import { light, dark } from '../index'
import css, { cssProps, get } from './css'
import { BoxProps } from '../../components/Box/types'
import hash from 'object-hash'
import flatten from 'obj-flatten'
import StyleContext from './ThemeProvider'
import themeConfig from './themeConfig'

let theme = light

Taro.getSystemInfo().then((res: any) => {
  const { theme: atheme = 'light' } = res || {}
  if (atheme === 'light') {
    theme = light
    themeConfig.toggle('light')
  } else {
    theme = dark
    themeConfig.toggle('dark')
  }
})

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

// @ts-ignore
// eslint-disable-next-line no-undef
if (bn) {
  // eslint-disable-next-line no-undef
  bn.onThemeChange(({ theme: atheme }) => {
    if (atheme === 'light') {
      theme = lightAPPTheme
    } else {
      theme = darkAPPTheme
    }
  })
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

export const getTheme = () => theme

export function useStyle(props: BoxProps) {
  const {
    sx = {},
    __css = {},
    variant = 'default',
    tx = 'variants',
    ...rest
  } = props

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
  const variantStyle = css(get(theme, tx + '.' + variant, get(theme, variant)))(
    { theme },
  )
  const sxStyle = css(sx)({ theme })
  const propsStyle = css(styleProps)({ theme })
  const style = { ...baseStyle, ...variantStyle, ...sxStyle, ...propsStyle }
  const test: string = hash(JSON.stringify(style))
  const classname: string = `bn${test.slice(0, 8)}`
  rest.className = rest?.className
    ? `${rest.className} ${classname} bn ba`
    : `ba bn ${classname}`
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
) {
  const WrappedComponent = forwardRef<any, T>((props, ref) => {
    const { rest } = useStyle(props)

    return (
      <>
        <Component ref={ref} {...rest} />
      </>
    )
  })
  return WrappedComponent
}
