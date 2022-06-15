import React from 'react'
import { Overlay } from '@pancakeswap/mp-uikit'
import Provider from 'src/Provider'
export default function Page() {
  return (
    <Provider>
      <Overlay />
    </Provider>
  )
}
