import React from 'react'
import { ThemeProvider } from '@pancake-taro-toolkit/styled'
import { light } from '@pancake-taro-toolkit/uikit'

export default function Provider({ children }) {
  return <ThemeProvider theme={light}>{children}</ThemeProvider>
}
