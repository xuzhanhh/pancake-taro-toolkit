import React, { useReducer, createContext, useState, useEffect } from 'react'
import { objToString } from '../utils/style'

export const ThemeContext = createContext({
  theme: {} as any,
  state: {},
  dispatch: (() => {}) as React.Dispatch<any>,
})

const initState = {}

const reducer = (state, action) => {
  switch (action.type) {
    case 'stylechange':
      return { ...state, ...action.payload.o }
    default:
      return state
  }
}

export const ThemeProvider = ({ children, theme: propTheme }) => {
  const [state, dispatch] = useReducer(reducer, initState)
  const [theme, setTheme] = useState(propTheme)
  useEffect(() => {
    if (propTheme !== theme) {
      setTheme(theme)
    }
  }, [propTheme])
  return (
    <ThemeContext.Provider value={{ state, dispatch, theme }}>
      <style dangerouslySetInnerHTML={{ __html: objToString(state) }} />
      {children}
    </ThemeContext.Provider>
  )
}
