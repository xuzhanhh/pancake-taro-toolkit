import React from 'react'
import { useTheme } from '../../theme'
import { scales, TagProps } from './types'
import { StyledTag } from './StyledTag'
import { styleVariants } from './theme'
import { Colors } from '../../theme/types'

const Tag: React.FC<TagProps> = ({ startIcon, endIcon, children, ...props }) => {
  const theme = useTheme()
  const themeColorKey = styleVariants[props.variant || 'primary'].backgroundColor as keyof Colors
  const color = props.outline ? theme.colors[themeColorKey] : '#ffffff'
  return (
    <StyledTag {...props}>
      {React.isValidElement(startIcon) &&
        React.cloneElement(startIcon, {
          mr: '0.5em',
          color,
        })}
      {children}
      {React.isValidElement(endIcon) &&
        React.cloneElement(endIcon, {
          ml: '0.5em',
          color,
        })}
    </StyledTag>
  )
}

Tag.defaultProps = {
  variant: 'primary',
  scale: scales.MD,
  outline: false,
}

export default Tag
