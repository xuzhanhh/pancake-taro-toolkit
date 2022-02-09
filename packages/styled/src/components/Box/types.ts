import { HTMLAttributes } from 'react'
import type {
  BackgroundProps,
  BorderProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  GridProps as _GridProps,
} from 'styled-system'

export interface SxProps {
  sx?: any
  __css?: any
}
export interface BoxProps
  extends BackgroundProps,
    BorderProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    HTMLAttributes<HTMLDivElement>,
    SxProps {}
export interface FlexProps extends BoxProps, FlexboxProps {}
export interface GridProps extends FlexProps, _GridProps {}
