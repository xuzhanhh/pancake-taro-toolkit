import React, { useRef } from 'react'
import useDelayedUnmount from '../../hooks/useDelayedUnmount'
import { DrawerContainer } from './styles'
import { CloseIcon } from '../Svg'
import { Box } from '../Box'
import { IconButton } from '../Button'
import { Overlay } from '../Overlay'

interface BottomDrawerProps {
  content: React.ReactNode
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const BottomDrawer: React.FC<BottomDrawerProps> = ({ content, isOpen, setIsOpen }) => {
  const ref = useRef<HTMLDivElement>(null)
  const shouldRender = useDelayedUnmount(isOpen, 350)

  if (!shouldRender) {
    return null
  }

  return (
    <>
      <Overlay />
      <DrawerContainer onClick={() => setIsOpen(false)} ref={ref} isUnmounting={!isOpen}>
        <Box position="absolute" right="16px" top="0">
          <IconButton variant="text" onClick={() => setIsOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        {content}
      </DrawerContainer>
    </>
  )
}

export default BottomDrawer
