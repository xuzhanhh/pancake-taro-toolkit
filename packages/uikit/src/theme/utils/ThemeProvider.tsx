import React, { useReducer, createContext } from 'react'
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

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <StyleContext.Provider value={{ state, dispatch }}>
      <style dangerouslySetInnerHTML={{ __html: objToString(state) }} />
      {children}
    </StyleContext.Provider>
  )
}
