import get from 'lodash/get'
import { PancakeTheme } from '../theme'

const getThemeValue =
  (path: string, fallback?: string | number) =>
  (theme: PancakeTheme): string =>
    get(theme, path, fallback)

export default getThemeValue
