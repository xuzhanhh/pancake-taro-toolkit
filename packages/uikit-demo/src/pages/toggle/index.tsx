import React, { useState } from 'react'
import { Box, Toggle, SunIcon, MoonIcon } from '@pancake-taro-toolkit/uikit'
import Provider from 'src/Provider'
const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false)

  const toggle = () => setIsChecked(!isChecked)

  return (
    <>
      <Box style={{ marginBottom: '32px' }}>
        <Toggle checked={isChecked} onChange={toggle} />
      </Box>
      <Box style={{ marginBottom: '32px' }}>
        <Toggle checked={isChecked} onChange={toggle} scale="md" />
      </Box>
      <Box style={{ marginBottom: '32px' }}>
        <Toggle
          checked={isChecked}
          defaultColor="textDisabled"
          checkedColor="textDisabled"
          onChange={toggle}
          scale="md"
          startIcon={(isActive = false) => <SunIcon color={isActive ? 'warning' : 'backgroundAlt'} />}
          endIcon={(isActive = false) => <MoonIcon color={isActive ? 'secondary' : 'backgroundAlt'} />}
        />
      </Box>
      <Box>
        <Toggle checked={isChecked} onChange={toggle} scale="sm" />
      </Box>
    </>
  )
}
export default function Page() {
  return (
    <Provider>
      <Default />
    </Provider>
  )
}
