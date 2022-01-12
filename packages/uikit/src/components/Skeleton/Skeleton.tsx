import React from 'react'
import { keyframes, styled } from '../../theme'
import { Box } from '../Box'
import {
  SkeletonProps,
  animation as ANIMATION,
  variant as VARIANT,
} from './types'

const waves = keyframes(`
	from {
		left: -150px;
	}
	to   {
		left: 100%;
	}
`)
const pulse = keyframes(`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`)
const Root = styled(Box)<SkeletonProps>({
  sx: {
    minHeight: '20px',
    display: 'block',
    backgroundColor: ({ theme }) => theme.colors.backgroundDisabled,
    borderRadius: ({ variant, theme }) =>
      variant === VARIANT.CIRCLE ? theme.radii.circle : theme.radii.small,
  },
})
const Pulse = styled(Root)<SkeletonProps>({
  sx: {
    animation: `${pulse} 2s infinite ease-out`,
    transform: 'translate3d(0, 0, 0)',
  },
})

const WavesWrap = styled(Root)({
  sx: {
    position: 'relative',
    overflow: 'hidden',
    transform: 'translate3d(0, 0, 0)',
  },
})
const WavesBefore = styled(Box)({
  sx: {
    position: 'absolute',
    backgroundImage:
      'linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent)',
    top: '0',
    left: '-150px',
    height: '100%',
    width: '150px',
    animation: `${waves} 2s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
  },
})
const Waves = (props) => {
  return (
    <WavesWrap {...props}>
      <WavesBefore />
    </WavesWrap>
  )
}
const Skeleton: React.FC<SkeletonProps> = ({
  variant = VARIANT.RECT,
  animation = ANIMATION.PULSE,
  ...props
}) => {
  if (animation === ANIMATION.WAVES) {
    return <Waves variant={variant} {...props} />
  }
  return <Pulse variant={variant} {...props} />
}

export default Skeleton
