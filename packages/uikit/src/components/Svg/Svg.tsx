import React, { useMemo } from 'react'
import { renderToString } from 'react-dom/server'
import { getTheme } from '../../theme/utils/style'
import { css } from '../../theme/utils/css'
import { Box } from '../Box'
import { SvgProps } from './types'

interface SVGParams {
  width?: any
  height?: any
  viewBox?: any
  fill?: any
  color?: any
  children?: any
}

const svgRenderString = ({ color, ...props }: SVGParams) =>
  renderToString(<svg xmlns="http://www.w3.org/2000/svg" {...props} />)
    .replace(/currentColor/g, color || '#111111')
    .replace(/_\d+:\d+/g, '')
    .replace(/"/g, "'")
    .replace(/%/g, '%25')
    .replace(/#/g, '%23')
    .replace(/</g, '%3C')
    .replace(/>/g, '%3E')
const Svg = ({
  width,
  height,
  viewBox,
  fill,
  color,
  children,
  ...props
}: SvgProps) => {
  const nextStyle = useMemo<{
    color?: string
    width?: string
    height?: string
  }>(
    () => css({ color, width, height })({ theme: getTheme() }),
    [color, width, height],
  )
  const { nextProps, __css } = useMemo(
    () => ({
      nextProps: {},
      __css: {
        display: 'inline-block',
        backgroundImage: `url("data:image/svg+xml,${svgRenderString({
          ...nextStyle,
          viewBox,
          fill: nextStyle?.color || undefined,
          children,
        })}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      },
    }),
    [nextStyle, viewBox, fill, children],
  )

  return (
    <Box
      {...props}
      {...nextProps}
      __css={{...__css, ...props.__css}}
      style={`width: ${width};height: ${height || width};` as any}
    />
  )
}

Svg.defaultProps = { width: '20px', color: 'text' }
Svg.displayName = 'Svg'

export default Svg
