
import { styled } from '@pancakeswap/mp-styled-2'
import Svg from '../Svg2'
const ChevronDownIcon = styled(Svg)`
	mask-image: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' %3E
      %3Cpath d='M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z' /%3E
    %3C/svg%3E");
`
  
ChevronDownIcon.defaultProps = { color: "text" }
export default ChevronDownIcon
  