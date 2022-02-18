import React, { useState } from 'react'
import { Box, ButtonMenu, ButtonMenuItem } from '@binance/mp-pancake-uikit'
import Provider from 'src/Provider'
const Row = (props) => (
  <Box
    sx={{
      mb: '32px',
      '& > button + button': {
        ml: '16px',
      },
    }}
    {...props}
  />
)
const DisabledMenu: React.FC = () => {
  const [index, setIndex] = useState(0)
  const [index1, setIndex1] = useState(1)

  const handleClick = (newIndex) => setIndex(newIndex)
  const handleClick1 = (newIndex) => setIndex1(newIndex)
  return (
    <>
      <Box fontSize="20px">Disabled Menu</Box>
      <Row>
        <ButtonMenu activeIndex={index} onItemClick={handleClick}>
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu disabled activeIndex={index} onItemClick={handleClick}>
          <ButtonMenuItem>Disabled 1</ButtonMenuItem>
          <ButtonMenuItem>Disabled 2</ButtonMenuItem>
          <ButtonMenuItem>Disabled 3</ButtonMenuItem>
          <ButtonMenuItem>Disabled 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu activeIndex={index1} onItemClick={handleClick1} scale="sm" variant="subtle" ml="24px">
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu disabled activeIndex={index1} onItemClick={handleClick1} scale="sm" variant="subtle" ml="24px">
          <ButtonMenuItem>Disabled 1</ButtonMenuItem>
          <ButtonMenuItem>Disabled 2</ButtonMenuItem>
          <ButtonMenuItem>Disabled 3</ButtonMenuItem>
          <ButtonMenuItem>Disabled 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
    </>
  )
}
const Default: React.FC = () => {
  const [index, setIndex] = useState(0)
  const [index1, setIndex1] = useState(1)

  const handleClick = (newIndex) => setIndex(newIndex)
  const handleClick1 = (newIndex) => setIndex1(newIndex)

  return (
    <>
      <Box fontSize="20px">Default</Box>
      <Row>
        <ButtonMenu activeIndex={index} onItemClick={handleClick}>
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu activeIndex={index1} onItemClick={handleClick1} scale="sm" ml="24px">
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu activeIndex={index} onItemClick={handleClick} variant="subtle">
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu activeIndex={index1} onItemClick={handleClick1} scale="sm" variant="subtle" ml="24px">
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
    </>
  )
}
const AsLinks: React.FC = () => {
  return (
    <Row>
      <ButtonMenu activeIndex={0}>
        <ButtonMenuItem as="a" href="/pages/index/index">
          Link 1
        </ButtonMenuItem>
        <ButtonMenuItem as="a" href="/pages/index/index">
          Link 2
        </ButtonMenuItem>
        <ButtonMenuItem as="a" href="/pages/index/index">
          Link 3
        </ButtonMenuItem>
      </ButtonMenu>
    </Row>
  )
}
const FullWidthMenu: React.FC = () => {
  const [index, setIndex] = useState(0)

  const handleClick = (newIndex: number) => setIndex(newIndex)

  return (
    <Box width="840px">
      <ButtonMenu activeIndex={index} onItemClick={handleClick} fullWidth mb="24px">
        <ButtonMenuItem>Button 1</ButtonMenuItem>
        <ButtonMenuItem>Button 2</ButtonMenuItem>
        <ButtonMenuItem>Button 3</ButtonMenuItem>
        <ButtonMenuItem>Button 4</ButtonMenuItem>
      </ButtonMenu>
      <ButtonMenu activeIndex={index} fullWidth scale="sm" variant="subtle">
        <ButtonMenuItem as="a" href="/pages/index/index">
          Link 1
        </ButtonMenuItem>
        <ButtonMenuItem as="a" href="/pages/index/index">
          Link 2
        </ButtonMenuItem>
        <ButtonMenuItem as="a" href="/pages/index/index">
          Link 3
        </ButtonMenuItem>
      </ButtonMenu>
    </Box>
  )
}
export default function ButtonMenuPage() {
  return (
    <Provider>
      <Box>
        <Default />
        <Box fontSize="24px" mb="24px">
          As Links
        </Box>
        <AsLinks />
        <DisabledMenu />
        <FullWidthMenu />
      </Box>
    </Provider>
  )
}
