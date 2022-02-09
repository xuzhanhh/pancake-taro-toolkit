import { SVGAttributes } from 'react'
import { LayoutProps, SpaceProps } from 'styled-system'
import { Colors, PancakeTheme } from '../../theme'
import { SxProps } from '../Box/types'

export interface SvgProps
  extends SpaceProps,
    LayoutProps,
    Omit<SVGAttributes<HTMLOrSVGElement>, 'display' | 'width' | 'overflow' | 'height'>,
    SxProps {
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
