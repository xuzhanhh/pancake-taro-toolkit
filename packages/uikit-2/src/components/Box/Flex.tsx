import React from 'react'
import Box from './Box'
import { FlexProps } from './types'
import { styled } from '@pancakeswap/mp-styled-2'

const Flex = styled(Box)<FlexProps>`
  display: flex;
`
// const Flex = (props: FlexProps) => <Box display="flex" {...props} />

export default Flex
