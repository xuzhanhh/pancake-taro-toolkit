import { SVGAttributes } from 'react'
import type { LayoutProps, SpaceProps } from 'styled-system'
import { SxProps } from '../Box/types'

export interface SvgProps
  extends SpaceProps,
    LayoutProps,
    Omit<SVGAttributes<HTMLOrSVGElement>, 'display' | 'width' | 'overflow' | 'height'>,
    SxProps {
  theme?: any
  spin?: boolean
}
export type IconComponentType = {
  iconName: string
  isActive?: boolean
  height?: string
  width?: string
  activeColor?: string
  activeBackgroundColor?: string
} & SvgProps
