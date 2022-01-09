import React, { ComponentType, createElement } from 'react'
import { SxStyleProp } from '../../components/Box/types'
import { getTheme, withStyle } from './style'

interface StyledParams {
  displayName: string
  sx: SxStyleProp
  isUikitComponent?: boolean
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
    } else if (typeof value === 'object') {
      resolvedSx[key] = resolveSx({ sx: value, ...rest })
    }
  })
  return resolvedSx
}

const styled = (baseComponent: ComponentType<any>) => {
  return function <T>({
    displayName,
    sx,
    attrs,
    isUikitComponent = true,
  }: StyledParams) {
    const StyledComponent: React.FC<T> = (props) => {
      const newSx = resolveSx({ sx, ...props })
      const styledBaseComponent = isUikitComponent
        ? baseComponent
        : withStyle(baseComponent)
      return createElement(styledBaseComponent, {
        ...attrs,
        ...props,
        sx: newSx,
      })
    }
    StyledComponent.displayName = displayName || 'Styled'
    return StyledComponent
  }
}

export default styled
