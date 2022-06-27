import { BoxProps } from '../Box'

export const scales = {
  SM: 'sm',
  MD: 'md',
} as const

export type Scales = typeof scales[keyof typeof scales]

export interface CheckboxProps extends Omit<BoxProps, 'onChange'> {
  defaultChecked?: boolean
  checked?: boolean
  scale?: Scales
  onChange?: (checked: boolean) => void
  indeterminate?: boolean
  disabled?: boolean
  name?: string
}
