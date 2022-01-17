import { styled } from '../../theme'
import { SpaceProps } from 'styled-system'
import { Box } from '../Box'

export type CardFooterProps = SpaceProps

const CardFooter = styled(Box)<CardFooterProps>({
  sx: {
    borderTop: ({ theme }) => `1px solid ${theme.colors.cardBorder}`,
  },
})
CardFooter.defaultProps = {
  p: '24px',
}

export default CardFooter
