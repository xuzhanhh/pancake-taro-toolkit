import { useTheme as useStyledTheme } from '@pancake-taro-toolkit/styled'
import { PancakeTheme } from '.'

export const useTheme = () => {
  const theme = useStyledTheme()
  return theme as PancakeTheme
}
