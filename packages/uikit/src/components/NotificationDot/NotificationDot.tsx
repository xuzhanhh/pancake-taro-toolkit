import React, { cloneElement, Children, ReactElement } from 'react'
import styled from '../../theme/utils/styled'
import { Box } from '../Box'
import { NotificationDotProps, DotProps } from './types'

const NotificationDotRoot = styled(Box)({
  sx: {
    display: 'inline-flex',
    position: 'relative',
  },
})

const Dot = styled(Box)<DotProps>({
  sx: {
    display: ({ show }) => (show ? 'inline-flex' : 'none'),
    position: 'absolute',
    top: '0',
    right: '0',
    width: '10px',
    height: '10px',
    pointerEvents: 'none',
    border: ({ theme }) => `2px solid ${theme.colors.invertedContrast}`,
    borderRadius: '50%',
    backgroundColor: ({ theme, color }) => theme.colors[color],
  },
})

const NotificationDot: React.FC<NotificationDotProps> = ({
  show = false,
  color = 'failure',
  children,
  ...props
}) => (
  <NotificationDotRoot>
    {Children.map(children, (child: ReactElement) =>
      cloneElement(child, props),
    )}
    <Dot show={show} color={color} />
  </NotificationDotRoot>
)

export default NotificationDot
