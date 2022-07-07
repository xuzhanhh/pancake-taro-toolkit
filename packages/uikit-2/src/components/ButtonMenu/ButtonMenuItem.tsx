import React from 'react'
import { styled } from '@pancakeswap/mp-styled-2'
import Button from '../Button/Button'
import { BaseButtonProps, PolymorphicComponent, variants } from '../Button/types'
import type { ButtonMenuItemProps } from './types'

interface InactiveButtonProps extends BaseButtonProps {
  forwardedAs: BaseButtonProps['as']
}
const InactiveButton: PolymorphicComponent<InactiveButtonProps, 'button'> = styled(Button)<InactiveButtonProps>`
  background-color: transparent !important;
  color: ${({ theme, variant }) =>
    variant === variants.PRIMARY ? theme.colors.primary : theme.colors.textSubtle}!important;
  &:hover:not(:disabled):not(:active) {
    background-color: transparent !important;
  }
`

const ButtonMenuItem: PolymorphicComponent<ButtonMenuItemProps, 'button'> = ({
  isActive = false,
  variant = variants.PRIMARY,
  as,
  ...props
}: ButtonMenuItemProps) => {
  console.log('???', isActive, variant)
  if (!isActive) {
    return <InactiveButton forwardedAs={as} variant={variant} {...props} />
  }

  return <Button as={as} variant={variant} {...props} />
}

export default ButtonMenuItem
