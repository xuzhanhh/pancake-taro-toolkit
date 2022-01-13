import React from 'react'
import { styled } from '../../theme'
import Flex from '../../components/Box/Flex'
import { Box } from '../../components/Box'
import { ArrowBackIcon, CloseIcon } from '../../components/Svg'
import { IconButton } from '../../components/Button'
import { ModalProps } from './types'

export const ModalHeader = styled(Box)<{ background?: string }>({
  sx: {
    alignItems: 'center',
    background: ({ background }) => background || 'transparent',
    borderBottom: ({ theme }) => `1px solid ${theme.colors.cardBorder}`,
    display: 'flex',
    padding: '12px 24px',
  },
})

export const ModalTitle = styled(Flex)({
  sx: {
    alignItems: 'center',
    flex: '1',
  },
})
// TODO need remove
export const ModalBody = styled(Flex)<any>({sx:{
	flexDirection: 'column',
  maxHeight: '90vh',
  overflowY: 'auto',

}})

export const ModalCloseButton: React.FC<{
  onDismiss: ModalProps['onDismiss']
}> = ({ onDismiss }) => {
  return (
    <IconButton
      variant="text"
      onClick={onDismiss}
      aria-label="Close the dialog"
    >
      <CloseIcon color="primary" />
    </IconButton>
  )
}

export const ModalBackButton: React.FC<{ onBack: ModalProps['onBack'] }> = ({
  onBack,
}) => {
  return (
    <IconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
      <ArrowBackIcon color="primary" />
    </IconButton>
  )
}

export const ModalContainer = styled(Box)<{ minWidth: string }>({sx:{
	overflow: 'hidden',
  background: ({ theme }) => theme.modal.background,
  boxShadow: '0px 20px 36px -8px rgba(14, 14, 44, 0.1),0px 1px 1px rgba(0, 0, 0, 0.05)',
  border: ({theme}) => `1px solid ${theme.colors.cardBorder}`,
  borderRadius: '32px',
  maxHeight: '100vh',
  zIndex: ({ theme }) => theme.zIndices.modal,
  width: 'auto',
  minWidth: ({ minWidth }) => minWidth,
  maxWidth: '100%',
}})