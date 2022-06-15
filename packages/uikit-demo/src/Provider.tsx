import React from 'react'
import { ThemeProvider, StyleProvider } from '@pancakeswap/mp-styled'
import { light } from '@pancakeswap/mp-uikit'

export default function Provider({ children }) {
  return (
    <>
      <StyleProvider />
      <ThemeProvider theme={light}>{children}</ThemeProvider>
    </>
  )
}
