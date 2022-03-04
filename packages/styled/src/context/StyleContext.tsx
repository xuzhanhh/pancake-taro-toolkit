import React, { useState, useEffect, FunctionComponent } from 'react'
import { objToString } from '../utils/style'
import eventBus from '../utils/eventBus'
import { shallowClone } from '../utils/shallowClone'

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
        const newStyle = shallowClone(pre)
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
      <Style styleStr={objToString(styleValue)} />
    </view>
  )
}
