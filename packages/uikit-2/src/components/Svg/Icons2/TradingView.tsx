
import { styled } from '@pancakeswap/mp-styled-2'
import Svg from '../Svg2'
const TradingViewIcon = styled(Svg)`
	mask-image: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21 11' %3E
    %3Cpath d='M.504.591l8.09.002.043 10.19-4.09-.03-.001-6.113L.5 4.633.504.591zM11.652 4.535a2.042 2.042 0 100-4.083 2.042 2.042 0 000 4.083zM15.787.598L20.5.603l-4.27 10.105-4.663-.01L15.754.606l.033-.008z' /%3E
  %3C/svg%3E");
`
  
TradingViewIcon.defaultProps = { color: "text" }
export default TradingViewIcon
  