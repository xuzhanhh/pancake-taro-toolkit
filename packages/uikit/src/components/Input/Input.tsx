import { Input as TaroInput } from '@tarojs/components'
import { getTheme } from '../../theme/utils/style'
import styled from '../../theme/utils/styled'
import { PancakeTheme } from '../../theme'
import { InputProps, scales } from './types'

interface StyledInputProps extends InputProps {
  theme: PancakeTheme
}

/**
 * Priority: Warning --> Success
 */
const getBoxShadow = ({
  isSuccess = false,
  isWarning = false,
  theme,
}: StyledInputProps) => {
  if (isWarning) {
    return theme.shadows.warning
  }

  if (isSuccess) {
    return theme.shadows.success
  }

  return theme.shadows.inset
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
const theme = getTheme()

const Input = styled(TaroInput)<InputProps>({
  isUikitComponent: false,
  sx: {
    backgroundColor: ({ theme }) => theme.colors.input,
    borderRadius: '16px',
    boxShadow: getBoxShadow,
    color: ({ theme }) => theme.colors.text,
    display: 'block',
    fontSize: '16px',
    height: getHeight,
    minHeight: getHeight,
    outline: '0',
    padding: '0 16px',
    width: '100%',
    border: ({ theme }) => `1px solid ${theme.colors.inputSecondary}`,

    '&:disabled': ({ disabled, theme }) =>
      disabled && {
        backgroundColor: theme.colors.backgroundDisabled,
        boxShadow: 'none',
        color: theme.colors.textDisabled,
        cursor: 'not-allowed',
      },

    '&:focus:not(:disabled)': {
      boxShadow: ({ theme }) => theme.shadows.focus,
    },
  },
  attrs: {
    placeholderStyle: {
      color: theme.colors.textSubtle,
    },
  },
})

export default Input
