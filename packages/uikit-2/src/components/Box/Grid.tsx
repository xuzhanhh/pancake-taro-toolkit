import React from 'react'
import Box from './Box'
import { GridProps } from './types'
import { styled } from '@pancakeswap/mp-styled-2'
// const Grid = (props: GridProps) => <Box display="grid" {...props} />
const Grid = styled(Box)<GridProps>`
  display: 'grid'
`

export default Grid
