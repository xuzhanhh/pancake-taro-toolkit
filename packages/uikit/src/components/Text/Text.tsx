import styled from '@binance/mp-styled'
import { PancakeTheme } from '../../theme'
import getThemeValue from '../../util/getThemeValue'
import { TextProps } from '.'
import { Box } from '../Box'

interface ThemedProps extends TextProps {
  theme: PancakeTheme
}

const getColor = ({ color, theme }: ThemedProps) => {
  return getThemeValue(`colors.${color}`, color)(theme)
}
const Text = styled(Box)<TextProps>`
  color: ${getColor};
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  line-height: 1.5;
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  ${({ ellipsis }) =>
    ellipsis &&
    `white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;`}
  ${({ small }) => small && `font-size: 14px;`}
`

Text.defaultProps = {
  color: 'text',
  small: false,
  ellipsis: false,
  fontSize: '16px',
}

export default Text
