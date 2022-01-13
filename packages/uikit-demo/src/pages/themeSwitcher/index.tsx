import React from 'react'
import { ThemeProvider, Box, ThemeSwitcher } from '@pancake-taro-toolkit/uikit'
export default function Page() {
  const [isDark, setIsDark] = React.useState(false)
  const toggleTheme = React.useCallback(() => setIsDark(!isDark), [isDark])
  return (
    <ThemeProvider>
      <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}
