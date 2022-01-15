import React from 'react'
import { styled } from '../../theme'
import { LinkProps } from './types'
import { Text } from '../Text'
import Taro from '@tarojs/taro'

const StyledLink = styled(Text)<LinkProps>({
  sx: {
    display: 'flex',
    alignItems: 'center',
    width: 'fit-content',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
})

const Link: React.FC<LinkProps> = ({ external, onClick, href, ...props }) => {
  const handleClick = (e: any) => {
    if (href && !external) {
      Taro.navigateTo({
        url: href,
      })
    }
    if (onClick) {
      onClick(e)
    }
  }
  return <StyledLink bold onClick={handleClick} {...props} />
}

Link.defaultProps = {
  color: 'primary',
}

export default Link
