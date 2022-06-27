import { SpaceProps } from 'styled-system'
import { styled } from '@pancakeswap/mp-styled-2'

export type CardBodyProps = SpaceProps

const CardBody = styled.view<CardBodyProps>``

CardBody.defaultProps = {
  p: '24px',
}

export default CardBody
