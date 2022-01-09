import styled from '../../theme/utils/styled'
import { TextProps } from '.'
import { Box } from '../Box'

const getFontSize = ({ fontSize, small }: TextProps) => {
  return small ? '14px' : fontSize || '16px'
}

const Text = styled(Box)<TextProps>({
  displayName: 'Text',
  sx: {
    color: ({ color }: TextProps) => `colors.${color}`,
    fontSize: getFontSize,
    fontWeight: ({ bold }: TextProps) => (bold ? 600 : 400),
    lineHeight: '1.5',
    textTransform: ({ textTransform }: TextProps) =>
      textTransform && { textTransform: textTransform },
    ellipsis: ({ ellipsis }: TextProps) =>
      ellipsis && {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
  },
})

Text.defaultProps = {
  color: 'text',
  small: false,
  ellipsis: false,
}

export default Text
