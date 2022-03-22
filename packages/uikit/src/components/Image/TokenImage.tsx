import styled from '@binance/mp-styled'
import Image from './Image'

const TokenImage = styled(Image)`
  &:before {
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.25);
    content: '';
    height: 100%;
    left: -1px;
    position: absolute;
    top: -1px;
    width: 100%;
    z-index: 7;
  }
`

export default TokenImage
