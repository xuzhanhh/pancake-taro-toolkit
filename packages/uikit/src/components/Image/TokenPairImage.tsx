import React from 'react'
import { TokenPairImageProps, variants } from './types'
import { StyledPrimaryImage, StyledSecondaryImage } from './styles'
import Wrapper from './Wrapper'

const TokenPairImage: React.FC<TokenPairImageProps> = ({
  primarySrc,
  secondarySrc,
  width,
  height,
  variant = variants.DEFAULT,
  primaryImageProps = {},
  secondaryImageProps = {},
  ...props
}) => {
  const secondaryImageSize = Math.floor(width / 2)
  const primarySizeScale = variant === variants.DEFAULT ? 0.92 : 0.82
  const primarySize = Math.floor(width * primarySizeScale)
  return (
    <Wrapper position="relative" width={width} height={height} {...props}>
      <StyledPrimaryImage
        variant={variant}
        src={primarySrc}
        width={primarySize}
        height={primarySize}
        {...primaryImageProps}
      />
      <StyledSecondaryImage
        variant={variant}
        src={secondarySrc}
        width={secondaryImageSize}
        height={secondaryImageSize}
        {...secondaryImageProps}
      />
    </Wrapper>
  )
}

export default TokenPairImage
