import React from 'react'
import { Spinner } from '@pancakeswap/mp-uikit'
import Provider from 'src/Provider'
export default function Page() {
  return (
    <Provider>
      <Spinner size={50} />
    </Provider>
  )
}
