import { ResponsiveStyleValue, SystemStyleObject } from '@styled-system/css'
import { HTMLAttributes } from 'react'
import {
  BackgroundProps,
  BorderProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  GridProps as _GridProps,
} from 'styled-system'

export type SxStyleProp =
  | SystemStyleObject
  | Record<
      string,
      | SystemStyleObject
      | ResponsiveStyleValue<number | string>
      | Record<
          string,
          SystemStyleObject | ResponsiveStyleValue<number | string>
        >
    >
export interface SxProps {
  sx?: SxStyleProp
  __css?: SxStyleProp
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

