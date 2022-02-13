import React, { useEffect, forwardRef } from 'react'
import { Input as MpInput } from '@binance/mp-components'

const Input = forwardRef<any, any>((props, ref) => {
  const { onChange, ...rest } = props
  useEffect(() => {
    if (ref) {
      ;(ref as any).current = {
        focus: () => {},
      }
    }
  }, [ref])
  const handleInput = (e) => {
    if (onChange) onChange(e)
  }
  return <MpInput onInput={handleInput} {...rest} />
})

export default Input
