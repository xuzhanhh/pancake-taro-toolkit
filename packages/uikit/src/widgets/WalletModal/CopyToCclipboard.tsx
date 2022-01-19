import React, { useState } from 'react'
import mpService from '@binance/mp-service'
import Text from '../../components/Text/Text'
import { CopyIcon } from '../../components/Svg'
import styled from '../../theme/utils/styled'
import { Box } from '../../components/Box'

interface Props {
  toCopy: string
}

const StyleButton = styled(Text)<any>({
  sx: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    color: ({ theme }) => theme.colors.primary,
  },
  attrs: { role: 'button' },
})

const Tooltip = styled(Box)<{ isTooltipDisplayed: boolean }>({
  sx: {
    display: ({ isTooltipDisplayed }) =>
      isTooltipDisplayed ? 'block' : 'none',
    position: 'absolute',
    bottom: '-22px',
    right: '0',
    left: '0',
    textAlign: 'center',
    backgroundColor: ({ theme }) => theme.colors.contrast,
    color: ({ theme }) => theme.colors.invertedContrast,
    borderRadius: '16px',
    opacity: '0.7',
  },
})
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
