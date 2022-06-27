
import { styled } from '@pancakeswap/mp-styled-2'
import Svg from '../Svg2'
const MinusIcon = styled(Svg)`
	mask-image: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' %3E
      %3Cpath d='M18 13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z' /%3E
    %3C/svg%3E");
`
  
MinusIcon.defaultProps = { color: "text" }
export default MinusIcon
  