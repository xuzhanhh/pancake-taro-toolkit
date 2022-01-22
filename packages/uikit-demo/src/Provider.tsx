import React from 'react'
import { ThemeProvider, StyleProvider } from '@pancake-taro-toolkit/styled'
import { light } from '@pancake-taro-toolkit/uikit'

export default function Provider({ children }) {
  return (
    <StyleProvider>
      <ThemeProvider theme={light}>{children}</ThemeProvider>
    </StyleProvider>
  )
}
