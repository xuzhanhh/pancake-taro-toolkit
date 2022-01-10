import React, { useContext } from 'react'
import { ThemeProvider } from '@pancake-taro-toolkit/uikit'
import { View, WebView } from '@binance/mp-components'
import { PathContext } from '../../context/pathContext'

const WebViewPage = () => {
  const { redirectAddress } = useContext(PathContext)
  console.log('🚀 ~ WebViewPage ~ redirectAddress', redirectAddress)
  return (
    <View>
      <WebView src={redirectAddress}></WebView>
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
