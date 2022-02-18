import React, { Component } from 'react'
import { View, Image } from '@binance/mp-components'
import { useRouter } from '@tarojs/taro'
import mpService from '@binance/mp-service'
import { Box } from '@binance/mp-pancake-uikit'
import './index.css'
import Provider from 'src/Provider'

const list = [
  {
    name: 'Alert',
    url: '/pages/alert/index',
  },
  {
    name: 'Box/Flex/Grid',
    url: '/pages/box/index',
  },
  {
    name: 'button',
    url: '/pages/button/index',
  },
  {
    name: 'buttonMenu',
    url: '/pages/buttonMenu/index',
  },
  {
    name: 'bottomDrawer',
    url: '/pages/bottomDrawer/index',
  },
  {
    name: 'card',
    url: '/pages/card/index',
  },
  {
    name: 'checkbox',
    url: '/pages/checkbox/index',
  },
  {
    name: 'heading',
    url: '/pages/heading/index',
  },
  {
    name: 'icon',
    url: '/pages/icon/index',
  },
  {
    name: 'image',
    url: '/pages/image/index',
  },
  {
    name: 'input',
    url: '/pages/input/index',
  },
  {
    name: 'link',
    url: '/pages/link/index',
  },
  {
    name: 'message',
    url: '/pages/message/index',
  },
  {
    name: 'modal',
    url: '/pages/modal/index',
  },
  {
    name: 'notificationDot',
    url: '/pages/notificationDot/index',
  },
  {
    name: 'overlay',
    url: '/pages/overlay/index',
  },
  {
    name: 'pancakeToggle',
    url: '/pages/pancakeToggle/index',
  },
  {
    name: 'skeleton',
    url: '/pages/skeleton/index',
  },
  {
    name: 'spinner',
    url: '/pages/spinner/index',
  },
  {
    name: 'tag',
    url: '/pages/tag/index',
  },
  {
    name: 'text',
    url: '/pages/text/index',
  },
  {
    name: 'themeSwitcher',
    url: '/pages/themeSwitcher/index',
  },
  {
    name: 'toggle',
    url: '/pages/toggle/index',
  },
]
const widgetList = [
  {
    name: 'walletModal',
    url: '/pages/walletModal/index',
  },
]

const Nav = ({ title, list }) => {
  const handleClick = (item: any) => {
    mpService.navigateTo({ url: item.url + '?name=hello' })
  }
  return (
    <View className="demo-home-nav">
      <View className="demo-home-nav__title">{title}</View>
      <View className="demo-home-nav__group">
        {list.map((item) => (
          <View key={item.name} className="demo-home-nav__block" onClick={() => handleClick(item)}>
            {item.name}
          </View>
        ))}
      </View>
    </View>
  )
}
export default function Index() {
  const router = useRouter()
  console.log('🚀 ~ router', router)

  return (
    <Provider>
      <Box p="24px">
        <View className="demo-home__title">
          <Image mode="aspectFit" className="demo-home__image" src="../../asset/logo.png" />
          <View className="demo-home__text">Pancake Taro</View>
        </View>
        <View className="demo-home__desc">Lightweight and reliable mini-program components library</View>
        <Nav title="Basic Component" list={list} />
        <Nav title="Widget Component" list={widgetList} />
      </Box>
    </Provider>
  )
}
