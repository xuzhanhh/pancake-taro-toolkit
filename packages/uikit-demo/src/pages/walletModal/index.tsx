import React from 'react'
import { ModalProvider, Flex, Button, useWalletModal } from '@pancakeswap/mp-uikit'
import Provider from 'src/Provider'
const Wallet: React.FC = () => {
  const { onPresentConnectModal } = useWalletModal(
    () => null,
    () => null,
    (s) => s,
  )
  return (
    <Flex>
      <Button onClick={onPresentConnectModal}>Open connect modal</Button>
    </Flex>
  )
}
export default function Page() {
  return (
    <Provider>
      <ModalProvider>
        <Wallet />
      </ModalProvider>
    </Provider>
  )
}
