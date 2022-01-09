import React from 'react'
import Box from './Box'
import { FlexProps } from './types'

const Flex = (props: FlexProps) => <Box display="grid" {...props} />

export default Flex
