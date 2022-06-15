import React from 'react'
import styled from '@pancakeswap/mp-styled'
import { Box } from '../Box'
import { SkeletonProps, SkeletonV2Props, animation as ANIMATION, variant as VARIANT } from './types'

const SkeletonWrapper = styled.div<SkeletonProps>`
  position: relative;
`

const Root = styled.div<SkeletonProps>`
  min-height: 20px;
  display: block;
  background-color: ${({ theme }) => theme.colors.backgroundDisabled};
  border-radius: ${({ variant, theme }) => (variant === VARIANT.CIRCLE ? theme.radii.circle : theme.radii.small)};
`

const Pulse = styled(Root)`
  transform: translate3d(0, 0, 0);
`

const WavesWrap = styled(Root)`
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
`

const WavesBefore = styled(Box)`
  position: absolute;
  background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);
  top: 0;
  left: -150px;
  height: 100%;
  width: 150px;
`
const Waves = (props) => {
  return (
    <WavesWrap {...props}>
      <WavesBefore />
    </WavesWrap>
  )
}
const Skeleton: React.FC<SkeletonProps> = ({ variant = VARIANT.RECT, animation = ANIMATION.PULSE, ...props }) => {
  if (animation === ANIMATION.WAVES) {
    return <Waves variant={variant} {...props} />
  }
  return <Pulse variant={variant} {...props} />
}

export const SkeletonV2: React.FC<SkeletonV2Props> = ({
  variant = VARIANT.RECT,
  animation = ANIMATION.PULSE,
  isDataReady = false,
  children,
  wrapperProps,
  ...props
}) => {
  return (
    <SkeletonWrapper {...wrapperProps}>
      {isDataReady && children}
      {!isDataReady &&
        (animation === ANIMATION.WAVES ? (
          <Waves variant={variant} {...props} />
        ) : (
          <Pulse variant={variant} {...props} />
        ))}
    </SkeletonWrapper>
  )
}

export default Skeleton
