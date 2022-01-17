import { styled } from '../../theme'
import { SpaceProps } from 'styled-system'
import { CardTheme } from './types'
import { Box } from '../Box'

export interface CardHeaderProps extends SpaceProps {
  variant?: keyof CardTheme['cardHeaderBackground']
}

const CardHeader = styled(Box)<CardHeaderProps>({
  sx: {
    background: ({ theme, variant = 'default' }) =>
      theme.card.cardHeaderBackground[variant],
    borderRadius: ({ theme }) => `${theme.radii.card} ${theme.radii.card} 0 0`,
  },
})
CardHeader.defaultProps = {
  p: '24px',
}

export default CardHeader
