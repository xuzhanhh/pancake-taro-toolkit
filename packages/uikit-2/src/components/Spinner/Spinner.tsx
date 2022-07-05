import React from 'react'
import { keyframes } from '@pancakeswap/mp-styled-2'
import { styled } from '@pancakeswap/mp-styled-2'
import PanIcon from './PanIcon'
import PancakeIcon from './PancakeIcon'
import { SpinnerProps } from './types'
import { Box } from '../Box'

const rotate = keyframes`
`

const float = keyframes`
`

const Container = styled(Box)`
  position: relative;
`

const RotatingPancakeIcon = styled(PancakeIcon)`
 @keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
 }
  position: absolute;
  top: 0;
  left: 0;
  animation: rotate 2s linear infinite;
  transform: translate3d(0, 0, 0);
`

const FloatingPanIcon = styled(PanIcon)`
  @keyframes float {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(10px);
	}
	100% {
		transform: translatey(0px);
	}

  }
  animation: float 6s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
`

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <RotatingPancakeIcon width={`${size * 0.5}px`} />
      <FloatingPanIcon width={`${size}px`} />
    </Container>
  )
}

export default Spinner
