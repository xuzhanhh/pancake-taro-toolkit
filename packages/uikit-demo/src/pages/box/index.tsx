import React, { Component } from 'react'
import { Box, BoxProps, Flex, Grid } from '@pancakeswap/mp-uikit'
import Provider from 'src/Provider'

const Title = (props: BoxProps) => <Box textAlign="center" fontSize="20px" {...props} />
export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <Provider>
        <Title>Box: </Title>
        <Box
          _css={{
            '&:disabled': {
              color: 'red',
            },
          }}
          p="16px"
          color="white"
          bg="red"
        >
          i am Box
        </Box>
        <Title my="16px">Flex:</Title>
        <Flex alignItems="center" justifyContent="center" bg="red" height="28px" color="white">
          i am Flex
        </Flex>
        <Title my="16px">Flex:</Title>
        <Grid>I am Grid</Grid>
      </Provider>
    )
  }
}
