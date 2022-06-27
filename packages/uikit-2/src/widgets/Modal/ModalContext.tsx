import React, { createContext, useState } from 'react'
import { styled } from '@pancakeswap/mp-styled-2'
import { Overlay } from '../../components/Overlay'
import { Handler } from './types'

interface ModalsContext {
  isOpen: boolean
  nodeId: string
  modalNode: React.ReactNode
  setModalNode: React.Dispatch<React.SetStateAction<React.ReactNode>>
  onPresent: (node: React.ReactNode, newNodeId: string, closeOnOverlayClick: boolean) => void
  onDismiss: Handler
  setCloseOnOverlayClick: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalWrapper = styled.view`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndices.modal - 1};
`

export const Context = createContext<ModalsContext>({
  isOpen: false,
  nodeId: '',
  modalNode: null,
  setModalNode: () => null,
  onPresent: () => null,
  onDismiss: () => null,
  setCloseOnOverlayClick: () => true,
})

const ModalProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [modalNode, setModalNode] = useState<React.ReactNode>()
  const [nodeId, setNodeId] = useState('')
  const [closeOnOverlayClick, setCloseOnOverlayClick] = useState(true)

  const handlePresent = (node: React.ReactNode, newNodeId: string, closeOnOverlayClick: boolean) => {
    setModalNode(node)
    setIsOpen(true)
    setNodeId(newNodeId)
    setCloseOnOverlayClick(closeOnOverlayClick)
  }

  const handleDismiss = () => {
    setModalNode(undefined)
    setIsOpen(false)
    setNodeId('')
  }

  const handleOverlayDismiss = () => {
    if (closeOnOverlayClick) {
      handleDismiss()
    }
  }

  return (
    <Context.Provider
      value={{
        isOpen,
        nodeId,
        modalNode,
        setModalNode,
        onPresent: handlePresent,
        onDismiss: handleDismiss,
        setCloseOnOverlayClick,
      }}
    >
      <view>
        {isOpen && (
          <ModalWrapper>
            <Overlay onClick={handleOverlayDismiss} />
            {React.isValidElement(modalNode) &&
              React.cloneElement(modalNode, {
                onDismiss: handleDismiss,
              })}
          </ModalWrapper>
        )}
      </view>
      {children}
    </Context.Provider>
  )
}

export default ModalProvider
