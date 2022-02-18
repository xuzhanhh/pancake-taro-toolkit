import React from 'react'
import { Box, Checkbox } from '@binance/mp-pancake-uikit'
import Provider from 'src/Provider'
const ControlCheck = () => {
  const [checked, setChecked] = React.useState(false)
  return (
    <>
      <Box>control Checkbox</Box>
      <Box>
        <Checkbox
          checked={checked}
          onChange={(checked) => {
            setChecked(checked)
          }}
        />
      </Box>
    </>
  )
}
export default function Page() {
  return (
    <Provider>
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
    </Provider>
  )
}
