import { styled } from '../../theme'
import { SpaceProps } from 'styled-system'
import { Box } from '../Box'

export type CardBodyProps = SpaceProps

const CardBody = styled(Box)<CardBodyProps>({ sx: {} })

CardBody.defaultProps = {
  p: '24px',
}

export default CardBody
