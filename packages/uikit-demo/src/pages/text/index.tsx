import React from 'react'
import { } from '@pancake-taro-toolkit/styled'
import { Text, } from '@pancake-taro-toolkit/uikit'
import Provider from 'src/Provider'
export default function Page() {
  return (
    <Provider>
      <Text>Default</Text>
      <Text bold>Bold text</Text>
      <Text small>Small text</Text>
      <Text fontSize="24px">Custom fontsize</Text>
      <Text color="red">Custom color</Text>
      <Text color="primary">Custom color from theme</Text>
      <Text color="secondary" textTransform="uppercase">
        with text transform
      </Text>
      <Text textAlign="center">center</Text>
      <Text display="inline" color="textSubtle" textTransform="uppercase">
        Example of{' '}
      </Text>
      <Text display="inline" bold textTransform="uppercase">
        inline{' '}
      </Text>
      <Text display="inline" color="textSubtle" textTransform="uppercase">
        Text
      </Text>
      <Text ellipsis width="250px">
        Ellipsis: a long text with an ellipsis just for the example
      </Text>
    </Provider>
  )
}
