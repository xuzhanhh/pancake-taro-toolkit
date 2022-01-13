import Button from './Button'
import { BaseButtonProps, PolymorphicComponent } from './types'
import { styled } from '../../theme'

const IconButton: PolymorphicComponent<BaseButtonProps, 'button'> = styled(
  Button,
)<BaseButtonProps>({
  sx: {
    padding: 0,
    ml: 'initial',
    width: ({ scale }) => (scale === 'sm' ? '32px' : '48px'),
  },
})

export default IconButton
