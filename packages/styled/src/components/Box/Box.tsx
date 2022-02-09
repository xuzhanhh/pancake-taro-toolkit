import React from 'react'
import { View } from '@binance/mp-components'
import { BoxProps } from './types'
import { withStyle } from '../../utils/style'

const Box = withStyle<BoxProps>(View as (props: BoxProps) => React.FunctionComponentElement<BoxProps>, {
  needResolved: true,
})

export default Box
