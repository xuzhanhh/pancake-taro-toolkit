import React, { ElementType, useContext } from 'react'
import mpService from '@binance/mp-service'
import getExternalLinkProps from '../../util/getExternalLinkProps'
import StyledButton from './StyledButton'
import { ButtonProps, scales, variants } from './types'
import { WebviewContext } from '../../context'

const Button = <E extends ElementType = 'button'>(props: ButtonProps<E>): JSX.Element => {
  const { startIcon, endIcon, external, className, isLoading, disabled, children, href, onClick, ...rest } = props
  const isDisabled = isLoading || disabled
  const classNames = className ? [className] : []
  const internalProps = external ? getExternalLinkProps() : {}
  const { webviewFilePath, setUrl } = useContext(WebviewContext)
  if (isLoading) {
    classNames.push('pancake-button--loading')
  }

  if (isDisabled && !isLoading) {
    classNames.push('pancake-button--disabled')
  }
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    if (isDisabled || isLoading) {
      e.preventDefault()
      e.stopPropagation()
    } else {
      onClick && onClick(e)
      if (href) {
        if (!external) {
          mpService.navigateTo({ url: href })
        } else if (webviewFilePath) {
          setUrl(href)
          setTimeout(() => {
            mpService.navigateTo({ url: webviewFilePath })
          }, 500)
        }
      }
    }
  }

  return (
    <StyledButton
      className={classNames.join(' ')}
      disabled={isDisabled}
      $isLoading={isLoading}
      onClick={handleClick}
      {...internalProps}
      {...rest}
    >
      {children}
    </StyledButton>
  )
}

Button.defaultProps = {
  isLoading: false,
  external: false,
  variant: variants.PRIMARY,
  scale: scales.MD,
  disabled: false,
}

export default Button
