import React from 'react'
import capitalize from 'lodash/capitalize'
import { Box, Tag, Flex, CommunityIcon, RemoveIcon } from '@pancake-taro-toolkit/uikit'
import Provider from 'src/Provider'
const variants = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  TEXTDISABLED: 'textDisabled',
  TEXTSUBTLE: 'textSubtle',
  BINANCE: 'binance',
  FAILURE: 'failure',
  WARNING: 'warning',
} as const

const scales = {
  MD: 'md',
  SM: 'sm',
} as const
const Default: React.FC = () => {
  return (
    <Box>
      {Object.values(variants).map((variant) => {
        return (
          <Box key={variant} mb="32px ">
            <Flex alignItems="center">
              {Object.values(scales).map((scale) => {
                return (
                  <Tag scale={scale} variant={variant} mr="8px">
                    {`${capitalize(variant)}: ${scale.toUpperCase()}`}
                  </Tag>
                )
              })}
              <Tag variant={variant} outline mr="8px">
                {`${capitalize(variant)} Outline`}
              </Tag>
              <Tag variant={variant} startIcon={<CommunityIcon />} mr="8px">
                {`${capitalize(variant)} Icon Left`}
              </Tag>
              <Tag variant={variant} outline startIcon={<CommunityIcon />} mr="8px">
                {`${capitalize(variant)} Icon Left`}
              </Tag>
              <Tag variant={variant} outline endIcon={<RemoveIcon />} mr="8px">
                {`${capitalize(variant)} Icon Right`}
              </Tag>
              <Tag variant={variant} outline startIcon={<CommunityIcon />} endIcon={<RemoveIcon />}>
                {`${capitalize(variant)} Both`}
              </Tag>
            </Flex>
          </Box>
        )
      })}
    </Box>
  )
}

const TextVariations: React.FC = () => {
  return (
    <Box>
      <Tag textTransform="uppercase" mr="16px">
        uppercase
      </Tag>
      <Tag fontWeight="bold" mr="16px">
        Bold
      </Tag>
    </Box>
  )
}
export default function Page() {
  return (
    <Provider>
      <Default />
      <TextVariations />
    </Provider>
  )
}
