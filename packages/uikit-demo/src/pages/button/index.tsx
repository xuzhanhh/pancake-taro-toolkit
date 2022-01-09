import React from 'react'
import { Button, Box, ThemeProvider } from '@pancake-taro-toolkit/uikit'

export default function ButtonPage() {
  return (
    <ThemeProvider>
      <Box>
        <Button>primary MD</Button>
        <Button scale="sm">primary SM</Button>
        <Button scale="xs">primary XS</Button>
      </Box>
      <Box>
        <Button variant="secondary">secondary MD</Button>
        <Button variant="secondary" scale="sm">secondary SM</Button>
        <Button variant="secondary" scale="xs">secondary XS</Button>
      </Box>
      <Box>
        <Button variant="tertiary">tertiary MD</Button>
        <Button variant="tertiary" scale="sm">tertiary SM</Button>
        <Button variant="tertiary" scale="xs">tertiary XS</Button>
      </Box>
      <Box>
        <Button variant="text">text MD</Button>
        <Button variant="text" scale="sm">text SM</Button>
        <Button variant="text" scale="xs">text XS</Button>
      </Box>
      <Box>
        <Button variant="danger">danger MD</Button>
        <Button variant="danger" scale="sm">danger SM</Button>
        <Button variant="danger" scale="xs">danger XS</Button>
      </Box>
      <Box>
        <Button variant="subtle">subtle MD</Button>
        <Button variant="subtle" scale="sm">subtle SM</Button>
        <Button variant="subtle" scale="xs">subtle XS</Button>
      </Box>
      <Box>
        <Button variant="success">success MD</Button>
        <Button variant="success" scale="sm">success SM</Button>
        <Button variant="success" scale="xs">success XS</Button>
      </Box>
      <Box>
        <Button variant="light">light MD</Button>
        <Button variant="light" scale="sm">light SM</Button>
        <Button variant="light" scale="xs">light XS</Button>
      </Box>
      <Box>
        <Button disabled>disabled</Button>
        <Button disabled isLoading>disabled</Button>
      </Box>
    </ThemeProvider>
  )
}
