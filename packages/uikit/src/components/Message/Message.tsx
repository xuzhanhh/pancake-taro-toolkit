import React, { useContext } from 'react'
import { styled } from '../../theme'
import { Text, TextProps } from '../Text'
import { Box } from '../Box'
import { MessageProps } from './types'

const MessageContext = React.createContext<MessageProps>({ variant: 'success' })

const MessageContainer = styled(Box)<MessageProps>({
  sx: {
    display: 'flex',
    backgroundColor: 'gray',
    padding: '16px',
    borderRadius: '16px',
    border: 'solid 1px',
  },
  attrs: {
    tx: 'message',
  },
})

const colors = {
  // these color names should be place in the theme once the palette is finalized
  warning: '#D67E0A',
  success: '#129E7D',
  danger: 'failure',
}

export const MessageText: React.FC<TextProps> = ({ children, ...props }) => {
  const ctx = useContext(MessageContext)
  return (
    <Text fontSize="14px" color={colors[ctx?.variant]} {...props}>
      {children}
    </Text>
  )
}

const Message: React.FC<MessageProps> = ({
  children,
  variant,
  icon,
  ...props
}) => {
  // TODO support Icon
  // const Icon = Icons[variant];
  return (
    <MessageContext.Provider value={{ variant }}>
      <MessageContainer variant={variant} {...props}>
        {/* <Box mr="12px">{icon ?? <Icon color={variants[variant].borderColor} width="24px" />}</Box> */}
        {children}
      </MessageContainer>
    </MessageContext.Provider>
  )
}

export default Message
