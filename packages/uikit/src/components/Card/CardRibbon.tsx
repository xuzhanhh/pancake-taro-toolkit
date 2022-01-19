import React from 'react'
import { Colors } from "../../theme/types";
import { PancakeTheme } from '../../theme'
import styled from '../../theme/utils/styled'
import { Box } from '../Box'
import { CardRibbonProps } from './types'

interface StyledCardRibbonProps extends CardRibbonProps {
  theme: PancakeTheme
}
const beforeSx = {
  backgroundColor: ({ variantColor = 'secondary', theme }) =>
    theme.colors[variantColor],
  content: '',
  height: '100%',
  margin: '0 -1px; ' /* Removes tiny gap */,
  position: 'absolute',
  top: '0',
  width: '100%',
}
const StyledCardRibbon = styled(Box)<Partial<StyledCardRibbonProps>>({
  sx: {
    zIndex: 10,
    backgroundColor: ({ variantColor = 'secondary', theme }) =>
      theme.colors[variantColor],
    color: 'white',
    margin: '0',
    padding: '8px 0',
    position: 'absolute',
    right: ({ ribbonPosition }) => (ribbonPosition === 'right' ? 0 : 'auto'),
    top: '0',
    textAlign: 'center',
    transform: ({ ribbonPosition }) =>
      ribbonPosition === 'right'
        ? 'translateX(30%) translateY(0%) rotate(45deg)'
        : 'translateX(0%) translateY(200%) rotate(-45deg)',
    transformOrigin: 'top left',
    width: '96px',

    '& > bn-view': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      width: '96px',
    },
  },
})
interface PseudoProps {
  variantColor?: keyof Colors
}
const StyledBefore = styled(Box)<PseudoProps>({ sx: { ...beforeSx, right: '100%' } })
const StyledAfter = styled(Box)<PseudoProps>({ sx: { ...beforeSx, left: '100%' } })
const CardRibbon: React.FC<CardRibbonProps> = ({
  variantColor,
  text,
  ribbonPosition,
  ...props
}) => {
  return (
    <StyledCardRibbon
      variantColor={variantColor}
      ribbonPosition={ribbonPosition}
      {...props}
    >
      <StyledBefore variantColor={variantColor} />
      <Box title={text}>{text}</Box>
      <StyledAfter variantColor={variantColor} />
    </StyledCardRibbon>
  )
}

CardRibbon.defaultProps = {
  ribbonPosition: 'right',
}

export default CardRibbon
