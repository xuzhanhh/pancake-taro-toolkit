import React from 'react'
import Box from './Box'
import { GridProps } from './types'

const Flex = (props: GridProps) => <Box display="grid" {...props} />

export default Flex
