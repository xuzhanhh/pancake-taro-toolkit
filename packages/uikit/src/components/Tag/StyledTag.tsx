import { PancakeTheme, styled } from '../../theme'
import { Colors } from '../../theme/types'
import { scaleVariants, styleVariants } from './theme'
import { TagProps, variants } from './types'
import { Box } from '../Box'

interface ThemedProps extends TagProps {
  theme: PancakeTheme
}

const getOutlineStyles = ({
  outline,
  theme,
  variant: variantKey = variants.PRIMARY,
}: ThemedProps) => {
  if (outline) {
    const themeColorKey = styleVariants[variantKey]
      .backgroundColor as keyof Colors
    const color = theme.colors[themeColorKey]

    return {
      color,
      background: theme.colors.background,
      border: `2px solid ${color}`,
    }
  }

  return ''
}

export const StyledTag = styled(Box)<TagProps>({
  sx: {
    alignItems: 'center',
    borderRadius: '16px',
    color: '#ffffff',
    display: 'inline-flex',
    fontWeight: '400',
    whiteSpace: 'nowrap',

    textTransform: ({ textTransform }) =>
      textTransform ? textTransform : 'none',
    scale: ({ scale }) => scaleVariants[scale],
    variant: ({ variant }) => styleVariants[variant],
    getOutlineStyles,
  },
})

export default null
