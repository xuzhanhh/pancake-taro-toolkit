import React, { Component } from 'react'
import { View, Image } from '@binance/mp-components'
import mpService from '@binance/mp-service'
import { ThemeProvider, Box } from '@pancake-taro-toolkit/uikit'
import './index.css'

const list = [
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
    name: 'checkbox',
    url: '/pages/checkbox/index',
  },
  {
    name: 'heading',
    url: '/pages/heading/index',
  },
  {
    name: 'text',
    url: '/pages/text/index',
  },
  {
    name: 'link',
    url: '/pages/link/index',
  },
]

const Nav = ({ title, list }) => {
  const handleClick = (item: any) => {
    mpService.navigateTo({ url: item.url })
  }
  return (
    <View className="demo-home-nav">
      <View className="demo-home-nav__title">{title}</View>
      <View className="demo-home-nav__group">
        {list.map((item) => (
          <View
            key={item.name}
            className="demo-home-nav__block"
            onClick={() => handleClick(item)}
          >
            {item.name}
          </View>
        ))}
      </View>
    </View>
  )
}
export default class Index extends Component {
  handleClick = (item: any) => {
    mpService.navigateTo({ url: item.url })
  }
  render() {
    return (
      <ThemeProvider>
        <Box p="24px">
          <View className="demo-home__title">
            <Image
              mode="aspectFit"
              className="demo-home__image"
              src="../../asset/logo.png"
            />
            <View className="demo-home__text">Pancake Taro</View>
          </View>
          <View className="demo-home__desc">
            Lightweight and reliable mini-program components library
          </View>
          <Nav title="Basic Component" list={list} />
        </Box>
      </ThemeProvider>
    )
  }
}
