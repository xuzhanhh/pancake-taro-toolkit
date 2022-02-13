import React from 'react'
import styled, { useTheme } from '@pancake-taro-toolkit/styled'
import {
  CardRibbon,
  Box,
  Card,
  CardBody,
  CardFooter,
  Heading,
  CardHeader as UIKitCardHeader,
} from '@pancake-taro-toolkit/uikit'
import Provider from 'src/Provider'

const Row = styled.div`
  margin-bottom: 32px;
`
const Default: React.FC = () => {
  return (
    <Box style={{ padding: '32px', width: '500px' }}>
      <Row>
        <Card>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card isActive>
          <CardBody>Active</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card isSuccess>
          <CardBody>Success</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card isWarning>
          <CardBody>Warning</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card isDisabled>
          <CardBody>Disabled</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
    </Box>
  )
}

const CardHeader: React.FC = () => {
  const theme = useTheme()
  // This is example how to make card header "overlap" the border.
  // Seems to be easiest solution that works on all screens and does not rely on absolute positioning trickery
  const headerHeight = '60px'
  const customHeadingColor = '#7645D9'
  const gradientStopPoint = `calc(${headerHeight} + 1px)`
  const borderBackground = `linear-gradient(${customHeadingColor} ${gradientStopPoint}, ${theme.colors.cardBorder} ${gradientStopPoint})`

  // Gradient overlap is also possible, just put the "dividing" gradient first and after that the header gradient
  const gradientBorderColor = `linear-gradient(transparent ${gradientStopPoint}, ${theme.colors.cardBorder} ${gradientStopPoint}), ${theme.colors.gradients.cardHeader}`
  return (
    <Box style={{ padding: '32px', width: '500px' }}>
      <Row>
        <Card borderBackground={borderBackground}>
          <Box background={customHeadingColor} p="16px" height={headerHeight}>
            <Heading size="xl" color="white">
              Custom overlapping Header
            </Heading>
          </Box>
          <CardBody>The border on sides of header is covered</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card borderBackground={gradientBorderColor}>
          <Box background={theme.colors.gradients.cardHeader} p="16px" height={headerHeight}>
            <Heading size="xl">Gradient overlapping Header</Heading>
          </Box>
          <CardBody>The border on sides of header is covered</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card>
          <UIKitCardHeader>
            <Heading size="xl">Card Header</Heading>
          </UIKitCardHeader>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card>
          <UIKitCardHeader variant="blue">
            <Heading size="xl">Card Header</Heading>
          </UIKitCardHeader>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card>
          <UIKitCardHeader variant="violet">
            <Heading size="xl">Card Header</Heading>
          </UIKitCardHeader>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card>
          <UIKitCardHeader variant="bubblegum">
            <Heading size="xl">Card Header</Heading>
          </UIKitCardHeader>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
    </Box>
  )
}
const CustomBackground: React.FC = () => {
  return (
    <Box style={{ padding: '32px', width: '500px' }}>
      <Card background="#f0c243" borderBackground="#b88700">
        <CardBody style={{ height: '150px' }}>Custom background</CardBody>
      </Card>
    </Box>
  )
}
const Ribbon: React.FC = () => {
  return (
    <Box style={{ padding: '32px', width: '500px' }}>
      <Row>
        <Card ribbon={<CardRibbon text="Ribbon" />}>
          <Box style={{ height: '112px', backgroundColor: '#191326' }} />
          <CardBody style={{ height: '150px' }}>Body</CardBody>
        </Card>
      </Row>
      <Row>
        <Card ribbon={<CardRibbon variantColor="textDisabled" text="Ribbon with Long Text" />}>
          <CardBody style={{ height: '150px' }}>Ribbons will truncate when text is too long</CardBody>
        </Card>
      </Row>
      <Row>
        <Card ribbon={<CardRibbon variantColor="success" text="Success" />}>
          <CardBody style={{ height: '150px' }}>Card</CardBody>
        </Card>
      </Row>
      <Row>
        <Card ribbon={<CardRibbon variantColor="failure" text="Failure" />}>
          <CardBody style={{ height: '150px' }}>Any Color in the theme</CardBody>
        </Card>
      </Row>
      <Row>
        <Card ribbon={<CardRibbon variantColor="failure" text="Failure" ribbonPosition="left" />}>
          <CardBody style={{ height: '150px' }}>Any Color in the theme</CardBody>
        </Card>
      </Row>
    </Box>
  )
}
export default function Page() {
  return (
    <Provider>
      <Heading>Default</Heading>
      <Default />
      <Heading>CardHeader</Heading>
      <CardHeader />
      <Heading>Custom Background</Heading>
      <CustomBackground />
      <Heading>Ribbon</Heading>
      <Ribbon />
    </Provider>
  )
}
