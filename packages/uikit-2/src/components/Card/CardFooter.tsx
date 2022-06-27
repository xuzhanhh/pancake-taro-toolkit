import { styled } from '@pancakeswap/mp-styled-2'
import { SpaceProps } from 'styled-system'

export type CardFooterProps = SpaceProps

const CardFooter = styled.view<CardFooterProps>`
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
`
CardFooter.defaultProps = {
  p: '24px',
}

export default CardFooter
