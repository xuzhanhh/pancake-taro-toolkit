import React, { useContext } from 'react'
import styled from '@pancakeswap/mp-styled'
import { LinkProps } from './types'
import { Text } from '../Text'
import mpService from '@binance/mp-service'
import { WebviewContext } from '../../context'

const StyledLink = styled(Text)<LinkProps>`
  display: flex;
  align-items: center;
  width: fit-content;
  &:hover {
    text-decoration: underline;
  }
`

const Link: React.FC<LinkProps> = ({ external, onClick, href, ...props }) => {
  const { webviewFilePath, setUrl } = useContext(WebviewContext)
  const handleClick = (e: any) => {
    if (href && !external) {
      mpService.navigateTo({
        url: href,
      })
    } else if (external && webviewFilePath && href) {
      setUrl(href)
      setTimeout(() => {
        mpService.navigateTo({ url: webviewFilePath })
      }, 500)
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
