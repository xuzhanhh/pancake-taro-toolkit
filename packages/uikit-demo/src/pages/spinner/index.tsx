import React from 'react'
import { Spinner } from '@pancake-taro-toolkit/uikit'
import Provider from 'src/Provider'
export default function Page() {
  return (
    <Provider>
      <Spinner size={50} />
    </Provider>
  )
}
