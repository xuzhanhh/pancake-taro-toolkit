import React from 'react'
import { View } from '@binance/mp-components'
import { BoxProps } from './types'
import { withStyle } from '../../styled'

// const Box = withStyle<BoxProps>(View as (props: BoxProps) => React.FunctionComponentElement<BoxProps>, {
//   needResolved: true,
// })

const Box = withStyle<BoxProps>(View as (props: BoxProps) => React.FunctionComponentElement<BoxProps>)
export default Box
