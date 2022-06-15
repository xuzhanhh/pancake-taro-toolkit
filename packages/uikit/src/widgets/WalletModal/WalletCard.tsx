import React from 'react'
import mpService from '@binance/mp-service'
import styled from '@pancakeswap/mp-styled'
import Button from '../../components/Button/Button'
import Text from '../../components/Text/Text'
import MoreHorizontal from '../../components/Svg/Icons/MoreHorizontal'
import { ButtonProps } from '../../components/Button'
import { connectorLocalStorageKey, walletLocalStorageKey } from './config'
import { Login, Config, ConnectorNames } from './types'

interface Props {
  walletConfig: Config
  login: Login
  onDismiss: () => void
}

const WalletButton = styled(Button).attrs({ variant: 'text' })<any>`
  alignitems: center;
  display: flex;
  flexdirection: column;
  height: auto;
  justifycontent: center;
  marginleft: auto;
  marginright: auto;
  width: 100%;
  py: 16px;
`
interface MoreWalletCardProps extends ButtonProps {
  t: (key: string) => string
}

export const MoreWalletCard: React.FC<MoreWalletCardProps> = ({ t, ...props }) => {
  return (
    <WalletButton {...props}>
      <MoreHorizontal width="40px" mb="8px" color="textSubtle" />
      <Text fontSize="14px">{t('More')}</Text>
    </WalletButton>
  )
}

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss }) => {
  const { title, icon: Icon } = walletConfig
  return (
    <WalletButton
      onClick={async () => {
        const info = await mpService.getSystemInfo()
        const isIOS = info.platform === 'ios'
        // Since iOS does not support Trust Wallet we fall back to WalletConnect
        if (walletConfig.title === 'Trust Wallet' && isIOS) {
          login(ConnectorNames.WalletConnect)
        } else {
          login(walletConfig.connectorId)
        }
        mpService.setStorageSync(walletLocalStorageKey, walletConfig.title)
        mpService.setStorageSync(connectorLocalStorageKey, walletConfig.connectorId)
        onDismiss()
      }}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
    >
      <Icon width="40px" mb="8px" />
      <Text fontSize="14px">{title}</Text>
    </WalletButton>
  )
}

export default WalletCard
