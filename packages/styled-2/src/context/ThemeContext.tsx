import React, { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext({} as any)

export const ThemeProvider = ({ children, theme: propTheme }) => {
  const [theme, setTheme] = useState(propTheme)
  useEffect(() => {
    if (propTheme !== theme) {
      setTheme(propTheme)
    }
  }, [propTheme])
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
