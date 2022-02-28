import React, { useState, useEffect, FunctionComponent } from 'react'
import merge from 'lodash/merge'
import { objToString } from '../utils/style'
import eventBus from '../utils/eventBus'

export const StyleProvider: FunctionComponent = ({ children }) => {
  const [styleValue, setStyleValue] = useState({})

  useEffect(() => {
    const setVal = (o) => {
      setStyleValue((pre) => merge({}, pre, o))
    }
    eventBus.addListener('stylechange', setVal)
    return () => {
      eventBus.removeListener('stylechange', setVal)
    }
  }, [])

  useEffect(() => {
    if (children) {
      console.warn(
        'There is a breaking change in StyleProvider, you no longer need to put the content of the page in the Provider, just a <StyleProvider />.',
      )
    }
  }, [children])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: objToString(styleValue) }} />
    </>
  )
}
