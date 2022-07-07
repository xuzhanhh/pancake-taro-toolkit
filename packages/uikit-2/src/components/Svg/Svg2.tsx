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

const SpinBox = styled(Box)`
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation: ${({ spin }) => (spin ? `rotate 2s linear infinite` : 'unset')};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  mask-size: cover;
  mask-position: center;
  mask-repeat: no-repeat;
  display: inline-block;
`

// const svgRenderString = ({ color, ...props }: SVGParams) => {
//   console.log('lalalal', color, props)
//   return renderToString(<svg xmlns="http://www.w3.org/2000/svg" {...props} />)
//     .replace(/currentColor/g, color || '#111111')
//     .replace(/_\d+:\d+/g, '')
//     .replace(/"/g, "'")
//     .replace(/%/g, '%25')
//     .replace(/#/g, '%23')
//     .replace(/</g, '%3C')
//     .replace(/>/g, '%3E')
//     }
const Svg = ({ width: propWidth, height: propHeight, color, ...props }: SvgProps) => {
  const width = typeof propHeight === 'number' ? `${propHeight}px` : propWidth
  const height = typeof propHeight === 'number' ? `${propHeight}px` : propHeight
  // const theme = useTheme()
  // const nextStyle = useMemo<{
  //   color?: string
  //   width?: string
  //   height?: string
  // }>(() => css({ color, width, height })({ theme }), [color, width, height])
  // const { nextProps, __css } = useMemo(
  //   () => ({
  //     nextProps: {},
  //     // __css: {
  //     //   display: 'inline-block',
  //     //   backgroundImage: `url("data:image/svg+xml,${svgRenderString({
  //     //     ...nextStyle,
  //     //     viewBox,
  //     //     fill: nextStyle?.color || undefined,
  //     //     children,
  //     //   })}")`,
  //     //   backgroundSize: 'cover',
  //     //   backgroundPosition: 'center',
  //     //   backgroundRepeat: 'no-repeat',
  //     // },
  //   }),
  //   [nextStyle, viewBox, fill, children],
  // )

  return (
    <SpinBox
      {...props}
      // {...nextProps}
      width={width}
      backgroundColor={color}
      height={height || width}
    />
  )
}

Svg.defaultProps = { width: '20px' }
Svg.displayName = 'Svg'

export default Svg
