import React, { ComponentType, createElement } from 'react'
import { SxStyleProp } from '../../components/Box/types'
import { getTheme } from './style'

interface StyledParams {
  displayName: string
  sx: SxStyleProp
  attrs?: any // TODO
}

// TODO props any
const resolveSx = (props: any) => {
  const { sx = {}, ...rest } = props
  const theme = getTheme()
  let resolvedSx = { ...sx }
  Object.keys(resolvedSx).forEach((key) => {
    const value = resolvedSx[key]
    if (typeof value === 'function') {
      delete resolvedSx[key]
      const newSx = value({ theme, ...rest })
      if (typeof newSx === 'object') {
        resolvedSx = { ...resolvedSx, ...newSx }
      } else if (typeof newSx === 'string' || typeof newSx === 'number') {
        resolvedSx[key] = newSx
      }
    }
  })
  return resolvedSx
}

const styled = (baseComponent: ComponentType<any>) => {
  return function <T>({ displayName, sx, attrs }: StyledParams) {
    const StyledComponent: React.FC<T> = (props) => {
      const newSx = resolveSx({ sx, ...props })
      return createElement(baseComponent, { ...attrs, ...props, sx: newSx })
    }
    StyledComponent.displayName = displayName || 'Styled'
    return StyledComponent
  }
}

export default styled
