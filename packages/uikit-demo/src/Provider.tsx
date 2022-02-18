import React from 'react'
import { ThemeProvider, StyleProvider } from '@binance/mp-styled'
import { light } from '@binance/mp-pancake-uikit'

export default function Provider({ children }) {
  return (
    <StyleProvider>
      <ThemeProvider theme={light}>{children}</ThemeProvider>
    </StyleProvider>
  )
}
