import { useTheme as useStyledTheme } from '@binance/mp-styled'
import { PancakeTheme } from '.'

export const useTheme = () => {
  const theme = useStyledTheme()
  return theme as PancakeTheme
}
