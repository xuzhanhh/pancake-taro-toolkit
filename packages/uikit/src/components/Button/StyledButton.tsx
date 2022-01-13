// @ts-nocheck
import React, { forwardRef } from 'react'
import { Button as TaroButton } from '@tarojs/components'
import { BoxProps } from '../Box'
import { getTheme, useStyle } from '../../theme/utils/style'
import sizes from './utils/ButtonSize'
import { Scale, BaseButtonProps } from './types'
import { scaleVariants } from './theme'

interface ThemedButtonProps extends BaseButtonProps {
  theme: DefaultTheme
}

interface TransientButtonProps extends ThemedButtonProps {
  $isLoading?: boolean
}

const composeClassNames: (
  originalNamesStr: string | undefined,
  flag: boolean,
  target: string,
) => string = (originalNamesStr, flag, target, disabled) => {
  const classNames: string[] = []
  if (originalNamesStr) {
    classNames.push(originalNamesStr)
  }

  if (flag) {
    classNames.push(target)
  }

  if (disabled) {
    classNames.push('disabled')
  }

  return classNames.join(' ').trim()
}

const getOpacity = ({ $isLoading = false }: TransientButtonProps) => {
  return $isLoading ? '.5' : '1'
}
const getDisabledStyles = ({ $isLoading }: TransientButtonProps) => {
  const theme = getTheme()
  let style = {}
  if ($isLoading === true) {
    style = {
      cursor: 'not-allowed',
    }
  }
  style = {
    backgroundColor: theme.colors.backgroundDisabled,
    borderColor: theme.colors.backgroundDisabled,
    boxShadow: 'none',
    color: theme.colors.textDisabled,
    cursor: 'not-allowed',
  }
  return {
    '&[disabled]': style,
    '&.pancake-button--disabled': style,
  }
}

const StyledButton = (props: BaseButtonProps) => {
  let {
    variant = 'default',
    colorStyle,
    scale,
    inactive,
    className,
    disabled,
    $isLoading = false,
    sx,
    __css,
  } = props

  const classNames: string = composeClassNames(
    className,
    !!inactive,
    'inactive',
    disabled,
  )
  const { rest } = useStyle({
    tx: 'button',
    ...props,
    variant,
    className: classNames,
    sx: sx || {},
    __css: {
      appearance: 'none',
      userSelect: 'none',
      cursor: 'pointer',

      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',

      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      fontFamily: 'inherit',
      textAlign: 'center',
      textDecoration: 'none',
      backgroundImage: 'none',
      border: 0,
      borderRadius: '16px',
      boxShadow: '0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset',
      fontSize: '16px',
      fontWeight: 600,
      letterSpacing: '0.03em',
      lineHeight: 1,
      opacity: getOpacity({ $isLoading }),
      outline: 0,
      transition: 'background-color 0.2s, opacity 0.2s',
      '&:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active)':
        {
          opacity: 0.65,
        },
      '&:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled)':
        {
          opacity: 0.85,
          transform: 'translateY(1px)',
          boxShadow: 'none',
        },
      ...(scaleVariants[scale] || {}),
      ...getDisabledStyles({ $isLoading }),
      ...__css,
    },
  })
  return <TaroButton {...rest} />
}

export default StyledButton
