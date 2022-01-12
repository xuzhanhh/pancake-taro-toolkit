import React from 'react'
import { ThemeProvider, Spinner } from '@pancake-taro-toolkit/uikit'
export default function Page() {
  return (
    <ThemeProvider>
      <Spinner size={50} />
    </ThemeProvider>
  )
}
