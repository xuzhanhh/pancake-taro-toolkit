
import { styled } from '@pancakeswap/mp-styled-2'
import Svg from '../Svg2'
const ArrowDropDownIcon = styled(Svg)`
	mask-image: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' %3E
      %3Cpath d='M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z' /%3E
    %3C/svg%3E");
`
  
ArrowDropDownIcon.defaultProps = { color: "text" }
export default ArrowDropDownIcon
  