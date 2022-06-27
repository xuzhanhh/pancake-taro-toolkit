import Button from './Button'
import { styled } from '@pancakeswap/mp-styled-2'
import { BaseButtonProps, PolymorphicComponent } from './types'

const IconButton: PolymorphicComponent<BaseButtonProps, 'button'> = styled(Button)<BaseButtonProps>`
  padding: 0;
  width: ${({ scale }) => (scale === 'sm' ? '32px' : '48px')};
`
export default IconButton
