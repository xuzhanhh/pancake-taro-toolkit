import React from 'react'
import { ThemeProvider, Overlay } from '@pancake-taro-toolkit/uikit'
export default function Page() {
  return (
    <ThemeProvider>
      <Overlay />
    </ThemeProvider>
  )
}
