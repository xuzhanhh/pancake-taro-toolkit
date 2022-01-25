import React from 'react'
import { Input as MpInput } from '@binance/mp-components'

const Input = (props) => {
  const { onChange, ...rest } = props
  const handleInput = (e) => {
    if (onChange) onChange(e)
  }
  return <MpInput onInput={handleInput} {...rest} />
}

export default Input
