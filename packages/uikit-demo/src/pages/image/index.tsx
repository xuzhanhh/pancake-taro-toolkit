import React from 'react'
import { Image as Img, Box } from '@binance/mp-pancake-uikit'
import Provider from 'src/Provider'

const Image: React.FC = () => {
  return (
    <Box>
      <Img src="https://via.placeholder.com/800x400" width={800} height={400} alt="test" />
      <Box>Image</Box>
    </Box>
  )
}
export default function Page() {
  return (
    <Provider>
      <Image />
    </Provider>
  )
}
