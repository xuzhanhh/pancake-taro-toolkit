import { useTheme as useStyledTheme } from '@pancakeswap/mp-styled-2'
import { PancakeTheme } from '.'

export const useTheme = () => {
  const theme = useStyledTheme()
  return theme as PancakeTheme
}
