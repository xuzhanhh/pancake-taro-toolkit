import React from 'react'
import { getTheme } from '../../theme/utils/style'
import Button from '../Button/Button'
import {
  BaseButtonProps,
  PolymorphicComponent,
  variants,
} from '../Button/types'
import { ButtonMenuItemProps } from './types'

interface InactiveButtonProps extends BaseButtonProps {
  forwardedAs: BaseButtonProps['as']
}

const InactiveButton: PolymorphicComponent<InactiveButtonProps, 'button'> = (
  props: InactiveButtonProps,
) => {
  const theme = getTheme()
  const { variant } = props
  return (
    <Button
      sx={{
        backgroundColor: 'transparent',
        color:
          variant === variants.PRIMARY
            ? theme.colors.primary
            : theme.colors.textSubtle,
        '&:hover:not(:disabled):not(:active)': {
          backgroundColor: 'transparent',
        },
      }}
      {...props}
    />
  )
}

const ButtonMenuItem: PolymorphicComponent<ButtonMenuItemProps, 'button'> = ({
  isActive = false,
  variant = variants.PRIMARY,
  as,
  ...props
}: ButtonMenuItemProps) => {
  if (!isActive) {
    return <InactiveButton forwardedAs={as} variant={variant} {...props} />
  }

  return <Button as={as} variant={variant} {...props} />
}

export default ButtonMenuItem
