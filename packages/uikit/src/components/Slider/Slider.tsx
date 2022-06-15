import React from 'react'
import SliderProps from './types'
import { Slider as MpSlider } from '@binance/mp-components'
import { useTheme } from '@pancakeswap/mp-styled'

const Slider: React.FC<SliderProps> = ({ min, max, value, onValueChanged, step, disabled = false, valueLabel }) => {
  const theme = useTheme()
  const onChange = (e) => {
    if (onValueChanged) {
      onValueChanged(e.detail.value)
    }
  }
  const propStep = step === 'any' ? undefined : step
  return (
    <MpSlider
      showValue={!!valueLabel}
      activeColor={disabled ? '#a4a4a4' : theme.colors.primary}
      onChange={onChange}
      value={value}
      min={min}
      max={max}
      step={propStep}
      disabled={disabled}
    />
  )
}

export default Slider
