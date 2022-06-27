import React from 'react'
import { styled } from '@pancakeswap/mp-styled-2'
import { PancakeTheme, useTheme } from '../../theme'
import CheckmarkCircleIcon from '../Svg/Icons2/CheckmarkCircle'
import ErrorIcon from '../Svg/Icons2/Error'
import BlockIcon from '../Svg/Icons2/Block'
import InfoIcon from '../Svg/Icons2/Info'
import CloseIcon from '../Svg/Icons2/Close'
import { Text } from '../Text'
import { IconButton } from '../Button'
import Flex from '../Box/Flex'
import { AlertProps, variants } from './types'
import { Box } from '../Box'

interface ThemedIconLabel {
  variant: AlertProps['variant']
  theme: PancakeTheme
  hasDescription: boolean
}

const getThemeColor = ({ theme, variant = variants.INFO }: ThemedIconLabel) => {
  switch (variant) {
    case variants.DANGER:
      return theme.colors.failure
    case variants.WARNING:
      return theme.colors.warning
    case variants.SUCCESS:
      return theme.colors.success
    case variants.INFO:
    default:
      return theme.colors.secondary
  }
}

const getIcon = (variant: AlertProps['variant'] = variants.INFO) => {
  switch (variant) {
    case variants.DANGER:
      return BlockIcon
    case variants.WARNING:
      return ErrorIcon
    case variants.SUCCESS:
      return CheckmarkCircleIcon
    case variants.INFO:
    default:
      return InfoIcon
  }
}

const IconLabel = styled(Box) <ThemedIconLabel>`
  background-color: ${getThemeColor};
  border-radius: 16px 0 0 16px;
  color: ${({ theme }) => theme.alert.background};
  padding: 12px;
`
const withHandlerSpacing = 32 + 12 + 8 // button size + inner spacing + handler position
const Details = styled(Box) <{ hasHandler: boolean }>`
  flex: 1;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: ${({ hasHandler }) => (hasHandler ? `${withHandlerSpacing}px` : '12px')};
  padding-top: 12px;
`

const CloseHandler = styled(Box)`
  border-radius: 0 16px 16px 0;
  right: 8px;
  position: absolute;
  top: 8px;
`

const StyledAlert = styled(Flex)`
  position: relative;
  background-color: ${({ theme }) => theme.alert.background};
  border-radius: 16px;
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
`

const Alert: React.FC<AlertProps> = ({ title, children, variant, onClick }) => {
  const Icon = getIcon(variant)
  const theme = useTheme()
  return (
    <StyledAlert>
      <IconLabel variant={variant} hasDescription={!!children}>
        <Icon style={{ color: theme.alert.background, width: "24px" }} />
      </IconLabel>
      <Details hasHandler={!!onClick}>
        <Text bold>{title}</Text>
        {typeof children === 'string' ? <Text>{children}</Text> : children}
      </Details>
      {onClick && (
        <CloseHandler>
          <IconButton scale="sm" variant="text" onClick={onClick}>
            <CloseIcon width="24px" color="currentColor" />
          </IconButton>
        </CloseHandler>
      )}
    </StyledAlert>
  )
}

export default Alert
