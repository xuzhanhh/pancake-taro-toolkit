import React, { ComponentType, forwardRef } from 'react'
import type { ExtraBoxProps } from '@/components/Box/types'
import useTheme from '../hooks/useTheme'
import { resolveAllStyle } from './utils/utils'
export function withStyle<T, P extends ExtraBoxProps = ExtraBoxProps>(
  Component: ComponentType<P>,
  // { needResolved = false } = {},
) {
  const WrappedComponent = forwardRef<T, P>((props, ref) => {
    const theme = useTheme()
    const newProps = { ...props }
    // if (needResolved) {
    const newStyledCss = resolveAllStyle(props, newProps.style ?? {}, theme)
    newProps.style = newStyledCss
    // }
    // const { rest } = useStyle(newProps)

    return <Component ref={ref} {...(newProps as any)} />
  })
  return WrappedComponent
}
