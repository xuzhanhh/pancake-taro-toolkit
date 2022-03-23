import styled from '@binance/mp-styled'
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

  ${({ variant }) => stylePrimaryVariants[variant]};
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

  ${({ variant }) => styleSecondaryVariants[variant]};
`
