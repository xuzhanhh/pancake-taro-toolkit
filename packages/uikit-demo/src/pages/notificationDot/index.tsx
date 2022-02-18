import React, { useState } from 'react'
import { Box, NotificationDot, Button, ButtonMenu, ButtonMenuItem } from '@binance/mp-pancake-uikit'
import Provider from 'src/Provider'

const Default: React.FC = () => {
  return (
    <>
      <NotificationDot show>
        <Button>Hi</Button>
      </NotificationDot>
      <NotificationDot show color="warning">
        <Button>Hi</Button>
      </NotificationDot>
      <NotificationDot show color="success">
        <Button>Hi</Button>
      </NotificationDot>
    </>
  )
}

const MenuButtons: React.FC = () => {
  const [index, setIndex] = useState(0)
  const handleClick = (newIndex) => setIndex(newIndex)
  return (
    <Box>
      <ButtonMenu activeIndex={index} onItemClick={handleClick}>
        <NotificationDot show={index === 0}>
          <ButtonMenuItem>Button 1</ButtonMenuItem>
        </NotificationDot>
        <NotificationDot show={index === 1}>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
        </NotificationDot>
        <NotificationDot show={index === 2}>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
        </NotificationDot>
      </ButtonMenu>
    </Box>
  )
}
export default function Page() {
  return (
    <Provider>
      <Box p="24px">
        <Box sx={{ fontSize: '24px', mb: '14px' }}>Default</Box>
        <Default />
        <Box sx={{ fontSize: '24px', my: '14px' }}>MenuButtons</Box>
        <MenuButtons />
      </Box>
    </Provider>
  )
}
