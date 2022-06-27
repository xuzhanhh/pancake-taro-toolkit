import { styled } from '@pancakeswap/mp-styled-2'
import Text from '../Text/Text'
import { tags, scales, HeadingProps } from './types'

const style = {
  [scales.MD]: {
    fontSize: '20px',
  },
  [scales.LG]: {
    fontSize: '24px',
  },
  [scales.XL]: {
    fontSize: '32px',
  },
  [scales.XXL]: {
    fontSize: '48px',
  },
}

const Heading = styled(Text) <HeadingProps>`
  font-size: ${({ scale }) => style[scale || scales.MD].fontSize};
  font-weight: bold;
  line-height: 1.1;
`
// Heading.defaultProps = {
//   as: tags.H2,
// }

export default Heading
