
import { styled } from '@pancakeswap/mp-styled-2'
import Svg from '../Svg2'
const SplitIcon = styled(Svg)`
	mask-image: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 16 16' fill='none' %3E
      %3Cpath
        d='M9.333 2.667l1.527 1.526-1.92 1.92.947.947 1.92-1.92 1.526 1.527v-4h-4zm-2.666 0h-4v4L4.193 5.14l3.14 3.133v5.06h1.334V7.727L5.14 4.193l1.527-1.526z'
        fill='currentColor'
      /%3E
    %3C/svg%3E");
`
  
SplitIcon.defaultProps = { color: "text" }
export default SplitIcon
  