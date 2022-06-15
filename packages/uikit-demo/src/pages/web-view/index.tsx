import React, { useContext } from 'react'
import { WebviewContext } from '@pancakeswap/mp-uikit'
import { View, WebView } from '@binance/mp-components'
import Provider from 'src/Provider'

const WebViewPage = () => {
  const { url } = useContext(WebviewContext)
  return (
    <View>
      <WebView src={url}></WebView>
    </View>
  )
}
export default function Page() {
  return (
    <Provider>
      <WebViewPage />
    </Provider>
  )
}
