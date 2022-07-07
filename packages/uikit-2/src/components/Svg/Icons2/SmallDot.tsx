
import { styled } from '@pancakeswap/mp-styled-2'
import Svg from '../Svg2'
const SmallDotIcon = styled(Svg)`
	mask-image: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' %3E
      %3Cpath
        d='M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z'
        fill='black'
      /%3E
    %3C/svg%3E");
`
  
SmallDotIcon.defaultProps = { color: "text" }
export default SmallDotIcon
  