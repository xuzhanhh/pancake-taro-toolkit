import React, { useContext } from 'react'
import mpService from '@binance/mp-service'
import {
  Box,
  Link,
  LinkExternal,
} from '@pancake-taro-toolkit/uikit'
import { PathContext } from '../../context/pathContext'
import Provider from 'src/Provider'
export default function Page() {
  const { setRedirectAddress } = useContext(PathContext)
  const onClick = () => {
    setRedirectAddress('https://www.baidu.com')
    setTimeout(() => {
      return mpService.navigateTo({ url: '/pages/web-view/index' })
    }, 500)
  }

  return (
    <Provider>
      <Box>
        <Link href="/">Default</Link>
      </Box>
      <Box>
        <Link href="/" color="text">
          Custom color
        </Link>
      </Box>
      <Box>
        <Link onClick={onClick} external>
          External
        </Link>
      </Box>
      <Box>
        <LinkExternal href="/">LinkExternal</LinkExternal>
      </Box>
    </Provider>
  )
}
