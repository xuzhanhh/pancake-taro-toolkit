import { styled } from '@pancakeswap/mp-styled-2'
import { PancakeTheme } from '../../theme'
import { Colors } from '../../theme/types'
import { scaleVariants, styleVariants } from './theme'
import { TagProps, variants } from './types'

interface ThemedProps extends TagProps {
  theme: PancakeTheme
}

export const getOutlineStyles = ({ outline, theme, variant: variantKey = variants.PRIMARY }: ThemedProps) => {
  console.log('??? getOutlineStyles', outline, variantKey)
  if (outline) {
    const themeColorKey = styleVariants[variantKey].backgroundColor as keyof Colors
    const color = theme.colors[themeColorKey]

    return {
      color: color,
      background: theme.colors.background,
      border: `2px solid ${color}`,
    }
  }

  return {}
}

export const StyledTag = styled.view<TagProps>`
  align-items: center;
  border-radius: 16px;
  color: #ffffff;
  display: inline-flex;
  font-weight: 400;
  white-space: nowrap;
  height: ${({ scale }) => scaleVariants[scale].height};
  padding: ${({ scale }) => scaleVariants[scale].padding};
  font-size: ${({ scale }) => scaleVariants[scale].fontSize};
  text-transform: ${({ textTransform }) => (textTransform ? textTransform : 'unset')};
`

//  background-color: ${({ variant }) => styleVariants[variant].backgroundColor};
//   color: ${(props) => getOutlineStyles(props).color || '#ffffff'};
//  background: ${(props) => getOutlineStyles(props).background || 'var(--tag-bg)'};
//  border: ${(props) => getOutlineStyles(props).border};

export default null
/*
   ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  ${getOutlineStyles}

 * */
