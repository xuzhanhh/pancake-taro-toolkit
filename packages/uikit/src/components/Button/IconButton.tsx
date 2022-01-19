import Button from './Button'
import { BaseButtonProps, PolymorphicComponent } from './types'
import styled from '../../styled-components'

const IconButton: PolymorphicComponent<BaseButtonProps, 'button'> = styled(
  Button,
)<BaseButtonProps>`
  padding: 0;
  width: ${({ scale }) => (scale === 'sm' ? '32px' : '48px')};
`
export default IconButton
