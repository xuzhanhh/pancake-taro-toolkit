import { SVGAttributes } from 'react'
import { SpaceProps } from 'styled-system'
import { Colors, PancakeTheme } from '../../theme'

export interface SvgProps extends SVGAttributes<HTMLOrSVGElement>, SpaceProps {
  theme?: PancakeTheme
  spin?: boolean
}

export type IconComponentType = {
  iconName: string
  isActive?: boolean
  height?: string
  width?: string
  activeColor?: string
  activeBackgroundColor?: keyof Colors
} & SvgProps
