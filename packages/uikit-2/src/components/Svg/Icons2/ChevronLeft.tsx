
import { styled } from '@pancakeswap/mp-styled-2'
import Svg from '../Svg2'
const ChevronLeftIcon = styled(Svg)`
	mask-image: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' %3E
      %3Cpath d='M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z' /%3E
    %3C/svg%3E");
`
  
ChevronLeftIcon.defaultProps = { color: "text" }
export default ChevronLeftIcon
  