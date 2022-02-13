import React from 'react'
import { Box, Flex, Text } from '@pancake-taro-toolkit/uikit'
import Provider from 'src/Provider'
const context = require.context('@pancake-taro-toolkit/uikit/dist/esm/components/Svg/Icons', true, /.js$/)

const components = context.keys().reduce((accum, path) => {
  const file = path.substring(2).replace('.tsx', '')
  return {
    ...accum,
    [file]: context(path),
  }
}, {})

export default function Page() {
  return (
    <Provider>
      <Flex flexWrap="wrap">
        {Object.keys(components).map((file) => {
          const Icon = components[file].default
          return (
            <Flex
              key={file}
              flexDirection="column"
              alignItems="center"
              width="128px"
              height="96px"
              style={{ border: '1px solid #eee' }}
              justifyContent="center"
              py="8px"
              m="4px"
            >
              <Flex alignItems="center" justifyContent="center" style={{ flex: 1 }} height="100%">
                <Icon width="48px" />
                <Icon width="24px" color="secondary" ml="4px" />
              </Flex>
              <Box py="4px">
                <Text color="textSubtle" fontSize="14px">
                  {file}
                </Text>
              </Box>
            </Flex>
          )
        })}
      </Flex>
    </Provider>
  )
}
