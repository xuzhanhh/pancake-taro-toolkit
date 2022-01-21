import styled from '@pancake-taro-toolkit/styled'
import { SpaceProps } from 'styled-system'

export type CardFooterProps = SpaceProps

const CardFooter = styled.div<CardFooterProps>`
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
`
CardFooter.defaultProps = {
  p: '24px',
}

export default CardFooter
