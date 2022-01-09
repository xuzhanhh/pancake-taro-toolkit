import React from 'react'
import { View } from '@tarojs/components'
import { BoxProps } from './types'
import { withStyle } from '../../theme/utils/style'

const Box = withStyle<BoxProps>(
  View as (props: BoxProps) => React.FunctionComponentElement<BoxProps>,
)

// @ts-ignore
Box.displayName = 'Box'

export default Box
