// @ts-nocheck
import React, { forwardRef } from 'react'
import { BoxProps } from '../Box'
import { styled, useTheme } from '@pancakeswap/mp-styled-2'
import sizes from './utils/ButtonSize'
import { Scale, BaseButtonProps } from './types'
import { scaleVariants } from './theme'
import { PancakeTheme } from '../../theme'

interface ThemedButtonProps extends BaseButtonProps {
  theme: PancakeTheme
}

interface TransientButtonProps extends ThemedButtonProps {
  $isLoading?: boolean
  theme: PancakeTheme
}

const composeClassNames: (originalNamesStr: string | undefined, flag: boolean, target: string) => string = (
  originalNamesStr,
  flag,
  target,
  disabled,
) => {
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
const getDisabledStyles = ({ $isLoading, theme }: TransientButtonProps) => {
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
  return style
  // return {
  //   '&[disabled]': style,
  //   '&.pancake-button--disabled': style,
  // }
}
const Decorator = styled.view`
  position: absolute;
  border-bottom: 20px solid ${({ decorator, theme }) => decorator.backgroundColor ?? theme.colors.secondary};
  border-left: 34px solid transparent;
  border-right: 12px solid transparent;
  height: 0;
  top: -1px;
  right: -12px;
  width: 75px;
  text-align: center;
  padding-right: 30px;
  line-height: 20px;
  font-size: 12px;
  font-weight: 400;
  transform: rotate(31.17deg);
  color: ${({ decorator }) => decorator.color ?? 'white'};
`
const getDecorator = ({ decorator, theme }: { decorator?: { text: string }; theme: PancakeTheme }) => {
  if (decorator) {
    return {
      '&::before': {
        content: decorator.text,
        position: 'absolute',
        borderBottom: `20px solid ${decorator.backgroundColor ?? theme.colors.secondary}`,
        borderLeft: '34px solid transparent',
        borderRight: '12px solid transparent',
        height: 0,
        top: '-1px',
        right: '-12px',
        width: '75px',
        textAlign: 'center',
        paddingRight: '30px',
        lineHeight: '20px',
        fontSize: '12px',
        fontWeight: 400,
        transform: 'rotate(31.17deg)',
        color: `${decorator.color ?? 'white'}`,
      },
    }
  }
  return {}
}
const Button = styled.button`
  margin-left: unset;
  margin-right: unset;
  appearance: none;
  user-select: none;
  cursor: pointer;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-family: inherit;
  text-align: center;
  text-decoration: none;
  background-image: none;
  border: 0;
  border-radius: 16px;
  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.03em;
  line-height: 1;
  outline: 0;
  transition: background-color 0.2s, opacity 0.2s;
  opacity: ${({ $isLoading, theme }) => getOpacity({ $isLoading, theme })};
  &.pancake-button--disabled {
    background-color: ${({ $isLoading, theme }) => getDisabledStyles({ $isLoading, theme }).backgroundColor}!important;
    border-color: ${({ $isLoading, theme }) => getDisabledStyles({ $isLoading, theme }).borderColor}!important;
    box-shadow: ${({ $isLoading, theme }) => getDisabledStyles({ $isLoading, theme }).boxShadow}!important;
    color: ${({ $isLoading, theme }) => getDisabledStyles({ $isLoading, theme }).color}!important;
    cursor: ${({ $isLoading, theme }) => getDisabledStyles({ $isLoading, theme }).cursor}!important;
  }
  &:hover:not(.pancake-button--disabled):not(:active) {
    opacity: 0.65;
  }
  &:active:not(.pancake-button--disabled) {
    opacity: 0.85;
    transform: translateY(1px);
    box-shadow: none;
  }
`
// FIXME remaining style not work
/*
 *      &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active): {
        opacity: 0.65;
      }
      &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled): {
        opacity: 0.85;
        transform: translateY(1px);
        boxShadow: none;
      }

 */
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
    decorator,
    __css,
    children,
  } = props
  const theme = useTheme()
  const classNames: string = composeClassNames(className, !!inactive, 'inactive', disabled)
  const newProps = {
    tx: 'button',
    ...props,
    children: undefined,
    variant,
    className: classNames,
    sx: sx || {},
    __css: {
      ...(scaleVariants[scale] || {}),
      // ...getDisabledStyles({ $isLoading, theme }),
      ...__css,
    },
  }
  return (
    <Button {...newProps}>
      {decorator && (
        <Decorator decorator={decorator} theme={theme}>
          {decorator.text}
        </Decorator>
      )}
      {children}
    </Button>
  )
}

export default StyledButton
