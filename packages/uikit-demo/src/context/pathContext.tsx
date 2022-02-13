import React, { useState } from 'react'

export const PathContext = React.createContext({
  redirectAddress: '',
  setRedirectAddress: (redirectAddress) => {},
})

export const PathProvider = function ({ children }) {
  const [redirectAddress, setRedirectAddress] = useState('')
  return <PathContext.Provider value={{ redirectAddress, setRedirectAddress }}>{children}</PathContext.Provider>
}
