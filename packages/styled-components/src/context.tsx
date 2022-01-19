import React, { useReducer, createContext, useState, useEffect } from 'react'
import { objToString } from './style'

const StyleContext = createContext({})
export default StyleContext

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
    <StyleContext.Provider value={{ state, dispatch, theme }}>
      <style dangerouslySetInnerHTML={{ __html: objToString(state) }} />
      {children}
    </StyleContext.Provider>
  )
}
