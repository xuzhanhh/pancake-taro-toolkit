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
export const StyledPrimaryImage = styled(TokenImage)<Omit<StyledImageProps, 'width' | 'height'>>`
  position: absolute;

  bottom: ${({variant}) => StyledPrimaryImage[variants].bottom};
  left: ${({variant}) => StyledPrimaryImage[variants].left};
  right: ${({variant}) => StyledPrimaryImage[variants].right};
  top: ${({variant}) => StyledPrimaryImage[variants].top};
  z-index: ${({variant}) => StyledPrimaryImage[variants].zIndex};
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
export const StyledSecondaryImage = styled(TokenImage)<StyledImageProps>`
  position: absolute;
  width: 50%;

  bottom: ${({ variant }) => styleSecondaryVariants[variant].bottom};
  left: ${({ variant }) => styleSecondaryVariants[variant].left};
  right: ${({ variant }) => styleSecondaryVariants[variant].right};
  top: ${({ variant }) => styleSecondaryVariants[variant].top};
  z-index: ${({ variant }) => styleSecondaryVariants[variant].zIndex};
`
