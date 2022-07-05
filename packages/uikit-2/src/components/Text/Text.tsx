import { styled } from '@pancakeswap/mp-styled-2'
import { PancakeTheme } from '../../theme'
import getThemeValue from '../../util/getThemeValue'
import { TextProps } from '.'
import { Box } from '../Box'

interface ThemedProps extends TextProps {
  theme: PancakeTheme
}
const getFontSize = ({ fontSize, small }: TextProps) => {
  return small ? '14px' : fontSize || '16px'
}
const getColor = ({ color, theme }: ThemedProps) => {
  return getThemeValue(`colors.${color}`, color)(theme)
}
const Text = styled(Box)<TextProps>`
  color: ${getColor};
  font-size: ${getFontSize};
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  line-height: 1.5;
  text-transform: ${({ textTransform }) =>  `${textTransform || 'unset'}`};
  white-space: ${({ellipsis}) => ellipsis ? 'nowrap': 'unset'};
  overflow: ${({ellipsis}) => ellipsis ? 'hidden': 'unset'};
  text-overflow: ${({ellipsis}) => ellipsis ? 'ellipsis': 'unset'};
`

Text.defaultProps = {
  color: 'text',
  small: false,
  ellipsis: false,
}

export default Text
