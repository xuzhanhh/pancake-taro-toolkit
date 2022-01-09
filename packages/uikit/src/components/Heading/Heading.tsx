import styled from '../../theme/utils/styled'
import Text from '../Text/Text'
import { tags, scales, HeadingProps } from './types'

const style = {
  [scales.MD]: {
    fontSize: '20px',
  },
  [scales.LG]: {
    fontSize: '24px',
  },
  [scales.XL]: {
    fontSize: '32px',
  },
  [scales.XXL]: {
    fontSize: '48px',
  },
}

const Heading = styled(Text)<HeadingProps>({
  sx: {
    fontSize: ({ scale }) => style[scale],
    fontWeight: 600,
    lineHeight: '1.1',
  },
  displayName: 'Heading',
  attrs: {
    bold: true,
  },
})

Heading.defaultProps = {
  as: tags.H2,
}

export default Heading
