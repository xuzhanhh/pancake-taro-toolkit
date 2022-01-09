import React from 'react'
import { ThemeProvider, Heading } from '@pancake-taro-toolkit/uikit'
export default function Page() {
  return (
    <ThemeProvider>
      <Heading>Default</Heading>
      <Heading scale="md">Size md</Heading>
      <Heading scale="lg">Size lg</Heading>
      <Heading scale="xl">Size xl</Heading>
      <Heading scale="xxl">Size xxl</Heading>
    </ThemeProvider>
  )
}
