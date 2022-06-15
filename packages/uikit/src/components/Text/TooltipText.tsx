import styled from '@pancakeswap/mp-styled'
import Text from './Text'

const TooltipText = styled(Text)`
  text-decoration-color = ${({ theme }) => `${theme.colors.textSubtle}`};
  -webkit-text-decoration-color = ${({ theme }) => `${theme.colors.textSubtle}`};
  -webkit-text-decoration-style: dotted;
  text-decoration-style: dotted;
  text-decoration-line: underline;
  -webkit-text-decoration-line: underline;
  text-underline-offset: 0.1em;
`

export default TooltipText
