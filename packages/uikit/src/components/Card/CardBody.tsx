import { SpaceProps } from 'styled-system'
import styled from '@binance/mp-styled'

export type CardBodyProps = SpaceProps

const CardBody = styled.div<CardBodyProps>``

CardBody.defaultProps = {
  p: '24px',
}

export default CardBody
