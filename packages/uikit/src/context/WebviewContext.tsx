import React, { createContext, useState } from 'react'
interface WebviewContextValue {
  webviewFilePath?: string
  url: string
  setUrl: (url: string) => void
}
export const WebviewContext = createContext<WebviewContextValue>({
  url: '',
  setUrl: () => {},
})

export const WebviewProvider: React.FC<Pick<WebviewContextValue, 'webviewFilePath'>> = ({
  children,
  webviewFilePath,
}) => {
  const [url, setUrl] = useState('')

  return <WebviewContext.Provider value={{ url, setUrl, webviewFilePath }}>{children}</WebviewContext.Provider>
}
