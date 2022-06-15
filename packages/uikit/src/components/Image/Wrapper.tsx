import React, { forwardRef } from 'react'
import styled from '@pancakeswap/mp-styled'
import { WrapperProps } from './types'

const StyledWrapper = styled.div<{ $width: number; $height: number }>`
  max-height: ${({ $height }) => $height}px;
  max-width: ${({ $width }) => $width}px;
  position: relative;
  width: 100%;

  &:after {
    content: '';
    display: block;
    padding-top: ${({ $width, $height }) => ($height / $width) * 100}%;
  }
`

const Wrapper = forwardRef<HTMLDivElement, WrapperProps>(({ width, height, children, ...props }, ref) => {
  return (
    <StyledWrapper ref={ref} $width={width} $height={height} {...props}>
      {children}
    </StyledWrapper>
  )
})

export default Wrapper
