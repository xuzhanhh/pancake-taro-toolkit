import React from 'react'
import {
  ThemeProvider,
  ModalProvider,
  Flex,
  Button,
  useWalletModal,
} from '@pancake-taro-toolkit/uikit'
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
    <ThemeProvider>
      <ModalProvider>
        <Wallet />
      </ModalProvider>
    </ThemeProvider>
  )
}
