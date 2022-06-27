import React, { useState } from 'react'
import mpService from '@binance/mp-service'
import { styled } from '@pancakeswap/mp-styled-2'
import Text from '../../components/Text/Text'
import { CopyIcon } from '../../components/Svg'
import { Box } from '../../components/Box'

interface Props {
  toCopy: string
}

const StyleButton = styled(Text).attrs({ role: 'button' })<any>`
  position: relative;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
`

const Tooltip = styled(Box)<{ isTooltipDisplayed: boolean }>`
  display: ${({ isTooltipDisplayed }) => (isTooltipDisplayed ? 'block' : 'none')};
  position: absolute;
  bottom: -22px;
  right: 0;
  left: 0;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.contrast};
  color: ${({ theme }) => theme.colors.invertedContrast};
  border-radius: 16px;
  opacity: 0.7;
`
const CopyToClipboard: React.FC<Props> = ({ toCopy, children, ...props }) => {
  const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false)

  const copyToClipboard = (content: string) => {
    return mpService.setClipboardData({ data: content })
  }

  function displayTooltip() {
    setIsTooltipDisplayed(true)
    setTimeout(() => {
      setIsTooltipDisplayed(false)
    }, 1000)
  }

  return (
    <StyleButton
      small
      bold
      onClick={() => {
        copyToClipboard(toCopy).then(displayTooltip)
      }}
      {...props}
    >
      {children}
      <CopyIcon width="20px" color="primary" ml="4px" />
      <Tooltip isTooltipDisplayed={isTooltipDisplayed}>Copied</Tooltip>
    </StyleButton>
  )
}

export default CopyToClipboard
