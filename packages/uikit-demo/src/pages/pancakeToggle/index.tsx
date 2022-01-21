import React, { useState } from 'react'
import {  Box, PancakeToggle } from '@pancake-taro-toolkit/uikit'
import Provider from 'src/Provider';

const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <Box style={{ marginBottom: "32px" }}>
        <PancakeToggle checked={isChecked} onChange={toggle} />
      </Box>
      <Box style={{ marginBottom: "32px" }}>
        <PancakeToggle checked={isChecked} onChange={toggle} scale="md" />
      </Box>
      <Box>
        <PancakeToggle checked={isChecked} onChange={toggle} scale="sm" />
      </Box>
    </>
  );
};
export default function Page() {
  return (
    <Provider>
      <Default />
    </Provider>
  )
}
