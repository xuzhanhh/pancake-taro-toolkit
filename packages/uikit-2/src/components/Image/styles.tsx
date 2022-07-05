import { styled } from '@pancakeswap/mp-styled-2'
import { ImageProps, Variant, variants } from './types'
import TokenImage from './TokenImage'

interface StyledImageProps extends ImageProps {
  variant: Variant
}
const stylePrimaryVariants = {
  [variants.DEFAULT]: {
    bottom: 'auto',
    left: 0,
    right: 'auto',
    top: 0,
    zIndex: 5,
  },
  [variants.INVERTED]: {
    bottom: 0,
    left: 'auto',
    right: 0,
    top: 'auto',
    zIndex: 6,
  },
}
export const StyledPrimaryImage = styled(TokenImage) <Omit<StyledImageProps, 'width' | 'height'>>`
  position: absolute;

  bottom: ${({ type }) => { console.log('fuck', type); return stylePrimaryVariants[type].bottom }};
  left: ${({ type }) => stylePrimaryVariants[type].left};
  right: ${({ type }) => stylePrimaryVariants[type].right};
  top: ${({ type }) => stylePrimaryVariants[type].top};
  z-index: ${({ type }) => stylePrimaryVariants[type].zIndex};
`
const styleSecondaryVariants = {
  [variants.DEFAULT]: {
    bottom: 0,
    left: 'auto',
    right: 0,
    top: 'auto',
    zIndex: 6,
  },
  [variants.INVERTED]: {
    bottom: 'auto',
    left: 0,
    right: 'auto',
    top: 0,
    zIndex: 5,
  },
}
export const StyledSecondaryImage = styled(TokenImage) <StyledImageProps>`
  position: absolute;
  width: 50%;

  bottom: ${({ type }) => styleSecondaryVariants[type].bottom};
  left: ${({ type }) => styleSecondaryVariants[type].left};
  right: ${({ type }) => styleSecondaryVariants[type].right};
  top: ${({ type }) => styleSecondaryVariants[type].top};
  z-index: ${({ type }) => styleSecondaryVariants[type].zIndex};
`
