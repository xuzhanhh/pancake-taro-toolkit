import React from 'react'
import { Overlay } from '@binance/mp-pancake-uikit'
import Provider from 'src/Provider'
export default function Page() {
  return (
    <Provider>
      <Overlay />
    </Provider>
  )
}
