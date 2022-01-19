import { SpaceProps } from 'styled-system'
import { styled } from '../../styled-components'

export type CardBodyProps = SpaceProps

const CardBody = styled.div<CardBodyProps>`
`;

CardBody.defaultProps = {
  p: '24px',
}

export default CardBody
