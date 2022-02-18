import React, { useState } from 'react'
import mpService from '@binance/mp-service'
import styled from '@binance/mp-styled'
import { useTheme } from '../../theme'
import Grid from '../../components/Box/Grid'
import Box from '../../components/Box/Box'
import Button from '../../components/Button/Button'
import getThemeValue from '../../util/getThemeValue'
import Text from '../../components/Text/Text'
import Heading from '../../components/Heading/Heading'
import { ModalBody, ModalCloseButton, ModalContainer, ModalHeader, ModalTitle } from '../Modal'
import WalletCard, { MoreWalletCard } from './WalletCard'
import config, { walletLocalStorageKey } from './config'
import { Config, Login } from './types'

interface Props {
  login: Login
  onDismiss?: () => void
  displayCount?: number
  t: (key: string) => string
}

const WalletWrapper = styled(Box)<any>`
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.cardBorder}`};
`

/**
 * Checks local storage if we have saved the last wallet the user connected with
 * If we find something we put it at the top of the list
 *
 * @returns sorted config
 */
const getPreferredConfig = (walletConfig: Config[]) => {
  const preferredWalletName = mpService.getStorageSync(walletLocalStorageKey)
  const sortedConfig = walletConfig.sort((a: Config, b: Config) => a.priority - b.priority)

  if (!preferredWalletName) {
    return sortedConfig
  }

  const preferredWallet = sortedConfig.find((sortedWalletConfig) => sortedWalletConfig.title === preferredWalletName)

  if (!preferredWallet) {
    return sortedConfig
  }

  return [
    preferredWallet,
    ...sortedConfig.filter((sortedWalletConfig) => sortedWalletConfig.title !== preferredWalletName),
  ]
}
const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null, displayCount = 3, t }) => {
  const theme = useTheme()
  const [showMore, setShowMore] = useState(false)

  const sortedConfig = getPreferredConfig(config)
  const displayListConfig = showMore ? sortedConfig : sortedConfig.slice(0, displayCount)

  return (
    <ModalContainer minWidth="320px">
      <ModalHeader background={getThemeValue('colors.gradients.bubblegum')(theme)}>
        <ModalTitle>
          <Heading>{t('Connect Wallet')}</Heading>
        </ModalTitle>
        <ModalCloseButton onDismiss={onDismiss} />
      </ModalHeader>
      <ModalBody width={['320px', null, '340px']}>
        <WalletWrapper py="24px" maxHeight="453px" overflowY="auto">
          <Grid sx={{ gridTemplateColumns: '1fr 1fr' }}>
            {displayListConfig.map((wallet) => (
              <Box key={wallet.title}>
                <WalletCard walletConfig={wallet} login={login} onDismiss={onDismiss} />
              </Box>
            ))}
            {!showMore && <MoreWalletCard t={t} onClick={() => setShowMore(true)} />}
          </Grid>
        </WalletWrapper>
        <Box p="24px">
          <Text textAlign="center" color="textSubtle" mb="16px">
            {t('Haven’t got a crypto wallet yet?')}
          </Text>
          <Button
            as="a"
            href="https://docs.pancakeswap.finance/get-started/connection-guide"
            variant="subtle"
            width="100%"
            external
          >
            {t('Learn How to Connect')}
          </Button>
        </Box>
      </ModalBody>
    </ModalContainer>
  )
}

export default ConnectModal
