import React from 'react'
import { ThemeProvider, Box, Checkbox } from '@pancake-taro-toolkit/uikit'
const ControlCheck = () => {
  const [checked, setChecked] = React.useState(false)
  return (
    <ThemeProvider>
      <Box>control Checkbox</Box>
      <Box>
        <Checkbox
          checked={checked}
          onChange={(checked) => {
            console.log('🚀 ~ ControlCheck ~ checked', checked)
            setChecked(checked)
          }}
        />
      </Box>
    </ThemeProvider>
  )
}
export default function Page() {
  return (
    <ThemeProvider>
      <Box>default</Box>
      <Box>
        <Checkbox />
        <Checkbox scale="sm" />
      </Box>
      <Box>checked</Box>
      <Box>
        <Checkbox scale="sm" checked />
      </Box>
      <Box>
        <Checkbox checked />
      </Box>
      <Box>disabled</Box>
      <Box>
        <Checkbox scale="sm" disabled />
      </Box>
      <Box>
        <Checkbox scale="sm" disabled checked />
      </Box>
      <ControlCheck />
    </ThemeProvider>
  )
}
