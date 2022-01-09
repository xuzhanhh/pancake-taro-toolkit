import React, { Component } from 'react'
import mpService from '@binance/mp-service'
import {
  ThemeProvider,
  Box,
  BoxProps,
  Flex,
  Grid,
} from '@pancake-taro-toolkit/uikit'

const Title = (props: BoxProps) => (
  <Box textAlign="center" fontSize="20px" {...props} />
)
const list = [
  {
    name: 'Box',
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
]
export default class Index extends Component {

  handleClick = (item: any) => {
    mpService.navigateTo({ url: item.url })
  }
  render() {
    return (
      <ThemeProvider>
        <Box>
          {list.map((item) => (
            <Box key={item.name} onClick={()=>this.handleClick(item)}>
              {item.name}
            </Box>
          ))}
        </Box>
      </ThemeProvider>
    )
  }
}
