import React from 'react'
import styled from '@pancakeswap/mp-styled'
import { ImageProps } from './types'
import Wrapper from './Wrapper'
import { Image as MpImage} from '@tarojs/component'

const StyledImage = styled(MpImage)<{ src: string }>`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

const Image: React.FC<ImageProps> = ({ src, width, height, ...props }) => {
  return (
    <Wrapper height={height} width={width} {...props}>
      <StyledImage src={src} />
    </Wrapper>
  )
}

export default Image
