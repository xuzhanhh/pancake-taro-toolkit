import { LayoutProps, SpaceProps, TypographyProps } from 'styled-system'
import { SxProps } from '../Box/types'

export interface TextProps
  extends SpaceProps,
    TypographyProps,
    LayoutProps,
    SxProps {
  color?: string
  fontSize?: string
  bold?: boolean
  small?: boolean
  ellipsis?: boolean
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize'
}
