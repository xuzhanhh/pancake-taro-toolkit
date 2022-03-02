import React, { useState, useEffect, FunctionComponent } from 'react'
import clone from 'lodash/clone'
import { objToString } from '../utils/style'
import eventBus from '../utils/eventBus'

interface StyleProps {
  styleStr: string
}

interface StyleObject {
  [key: string]: Record<string, string | number>
}

const Style: React.FunctionComponent<StyleProps> = React.memo(({ styleStr }) => {
  return <style dangerouslySetInnerHTML={{ __html: styleStr }} />
})

export const StyleProvider: FunctionComponent = ({ children }) => {
  const [styleValue, setStyleValue] = useState<StyleObject>({})

  useEffect(() => {
    const setVal = (o: StyleObject) => {
      setStyleValue((pre) => {
        const newStyle = clone(pre)
        Object.keys(o).forEach((key) => {
          newStyle[key] = o[key]
        })
        return newStyle
      })
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
    <view style={{ display: 'none' }}>
      {Object.keys(styleValue).map((key) => {
        const styleStr = objToString({ [key]: styleValue[key] })
        return <Style key={key} styleStr={styleStr} />
      })}
      {/*<style dangerouslySetInnerHTML={{ __html: objToString(styleValue) }} />*/}
    </view>
  )
}
