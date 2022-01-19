import React from 'react'
import PanIcon from './PanIcon'
import PancakeIcon from './PancakeIcon'
import { SpinnerProps } from './types'
import styled from '../../theme/utils/styled'
import keyframes from '../../theme/utils/keyframes'
import { Box } from '../Box'
import { SvgProps } from '../Svg'

const rotate = keyframes(`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`)

const float = keyframes(`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(10px);
	}
	100% {
		transform: translatey(0px);
	}
`)

const Container = styled(Box)({
  sx: {
    position: 'relative',
  },
})

const RotatingPancakeIcon = styled(PancakeIcon)<SvgProps>({
  sx: {
    position: 'absolute',
    top: '0',
    left: '0',
    animation: `${rotate} 2s linear infinite`,
    transform: 'translate3d(0, 0, 0)',
  },
})

const FloatingPanIcon = styled(PanIcon)<SvgProps>({
  sx: {
    animation: `${float} 6s ease-in-out infinite`,
    transform: 'translate3d(0, 0, 0)',
  },
})

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <RotatingPancakeIcon width={`${size * 0.5}px`} />
      <FloatingPanIcon width={`${size}px`} />
    </Container>
  )
}

export default Spinner
