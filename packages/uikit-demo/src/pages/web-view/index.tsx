import React, { useContext } from 'react'
import { ThemeProvider, WebviewContext } from '@pancake-taro-toolkit/uikit'
import { View, WebView } from '@binance/mp-components'

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
    <ThemeProvider>
      <WebViewPage />
    </ThemeProvider>
  )
}
