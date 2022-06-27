import React, { useMemo } from 'react'
import { renderToString } from 'react-dom/server'
import { Box } from '../Box'
import { SvgProps } from './types'
import { useTheme, css, keyframes } from '@pancakeswap/mp-styled-2'
import { styled } from '@pancakeswap/mp-styled-2'

interface SVGParams {
  width?: any
  height?: any
  viewBox?: any
  fill?: any
  color?: any
  children?: any
}
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const SpinBox = styled(Box)`
  animation: ${({ spin }) => (spin ? `${rotate} 2s linear infinite` : 'unset')};
`

const svgRenderString = ({ color, ...props }: SVGParams) => {
  console.log('lalalal')
  return renderToString(<svg xmlns="http://www.w3.org/2000/svg" {...props} />)
    .replace(/currentColor/g, color || '#111111')
    .replace(/_\d+:\d+/g, '')
    .replace(/"/g, "'")
    .replace(/%/g, '%25')
    .replace(/#/g, '%23')
    .replace(/</g, '%3C')
    .replace(/>/g, '%3E')
}
const Svg = ({ width: propWidth, height: propHeight, viewBox, fill, color, children, style, className, ...props }: SvgProps) => {
  const width = typeof propHeight === 'number' ? `${propHeight}px` : propWidth
  const height = typeof propHeight === 'number' ? `${propHeight}px` : propHeight
  const theme = useTheme()
  const nextStyle = useMemo<{
    color?: string
    width?: string
    height?: string
  }>(() => css({ color, width, height })({ theme }), [color, width, height])
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
    <SpinBox
      {...props}
      {...nextProps}
      className={className}
      __css={{ ...__css, ...props.__css }}
      style={{ ...style }}
      width={width}
      height={height || width}
    />
  )
}

Svg.defaultProps = { width: '20px', color: 'text' }
Svg.displayName = 'Svg'

export default Svg
