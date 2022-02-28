import React from 'react'
import styled from '@binance/mp-styled'
import { PancakeTheme, useTheme } from '../../theme'
import { InputProps, scales } from './types'

interface StyledInputProps extends InputProps {
  theme: PancakeTheme
}

const getHeight = ({ scale = scales.MD }: StyledInputProps) => {
  switch (scale) {
    case scales.SM:
      return '32px'
    case scales.LG:
      return '48px'
    case scales.MD:
    default:
      return '40px'
  }
}

const StyledInput = styled.input<InputProps>`
  background-color: ${({ theme }) => theme.colors.input};
  border: 0;
  border-radius: 16px;
  color: ${({ theme }) => theme.colors.text};

  display: block;
  font-size: 16px;
  height: ${getHeight};
  min-height: ${getHeight};
  outline: 0;
  padding: 0 16px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.inputSecondary};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.backgroundDisabled};
    box-shadow: none;
    color: ${({ theme }) => theme.colors.textDisabled};
    cursor: not-allowed;
  }
`
const Input = React.forwardRef((props: InputProps, ref) => {
  const theme = useTheme()
  return <StyledInput ref={ref} placeholderStyle={{ color: theme.colors.textSubtle }} {...props} />
})
export default Input
