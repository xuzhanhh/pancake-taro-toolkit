import React from 'react'
import { Heading } from '@pancakeswap/mp-uikit'
import Provider from 'src/Provider'
export default function Page() {
  return (
    <Provider>
      <Heading>Default</Heading>
      <Heading scale="md">Size md</Heading>
      <Heading scale="lg">Size lg</Heading>
      <Heading scale="xl">Size xl</Heading>
      <Heading scale="xxl">Size xxl</Heading>
    </Provider>
  )
}
