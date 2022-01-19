import React, { Children, cloneElement, ReactElement } from 'react'
import { styled } from '../../styled-components'
// import { getTheme } from '../../theme/utils/style'
import { PancakeTheme } from '../../theme'
// import { Box } from '../Box'
import { scales, variants } from '../Button/types'
import { ButtonMenuProps } from './types'

interface StyledButtonMenuProps extends ButtonMenuProps {
  theme: PancakeTheme
}
type StyledUtilsParams = { theme: PancakeTheme } & Pick<
  ButtonMenuProps,
  'variant'
>

const getBackgroundColor = ({ theme, variant }: StyledUtilsParams) => {
  return theme.colors[variant === variants.SUBTLE ? 'input' : 'tertiary']
}

const getBorderColor = ({ theme, variant }: StyledUtilsParams) => {
  return theme.colors[
    variant === variants.SUBTLE ? 'inputSecondary' : 'disabled'
  ]
}
// TODO remove any
const StyledButtonMenu: any = styled.div<StyledButtonMenuProps>`
  background-color: ${getBackgroundColor};
  border-radius: 16px;
  display: ${({ fullWidth }) => (fullWidth ? 'flex' : 'inline-flex')};
  border: 1px solid ${getBorderColor};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  & > button,
  & > a {
    flex: ${({ fullWidth }) => (fullWidth ? 1 : 'auto')};
  }

  & > button + button,
  & > a + a {
    margin-left: 2px; // To avoid focus shadow overlap
  }

  & > button,
  & a {
    box-shadow: none;
    flex: ${({ fullWidth }) => (fullWidth ? '1' : 'auto')};
  }

  ${({ disabled, theme, variant }) => {
    if (disabled) {
      return `
        opacity: 0.5;
        & > button:disabled {
          background-color: transparent;
          color: ${
            variant === variants.PRIMARY
              ? theme.colors.primary
              : theme.colors.textSubtle
          };
        }
    `
    }
    return ''
  }}
`
// const StyledButtonMenu = (
//   props: Omit<ButtonMenuProps, 'children'> & {
//     children: React.ReactNode
//   },
// ) => {
//   const { variant, fullWidth, disabled, ...rest } = props
//   const theme = getTheme()
//   return (
//     <Box
//       __css={{
//         backgroundColor: getBackgroundColor({ theme, variant }),
//         borderRadius: '16px',
//         display: fullWidth ? 'flex' : 'inline-flex',
//         border: `1px solid ${getBorderColor({ theme, variant })}`,
//         width: fullWidth ? '100%' : 'auto',
//         '& > button': {
//           flex: fullWidth ? '1' : 'auto',
//           boxShadow: 'none',
//         },
//         '& > a': {
//           flex: fullWidth ? '1' : 'auto',
//         },
//         '& > button + button': {
//           ml: '2px',
//         },
//         '& > a + a': {
//           ml: '2px', // To avoid focus shadow overlap
//         },
//         '& a': {
//           boxShadow: 'none',
//         },
//         ...(disabled && {
//           opacity: 0.5,
//           '& > button:disabled': {
//             backgroundColor: 'transparent',
//             color:
//               variant === variants.PRIMARY
//                 ? theme.colors.primary
//                 : theme.colors.textSubtle,
//           },
//         }),
//       }}
//       {...rest}
//     />
//   )
// }
const ButtonMenu: React.FC<ButtonMenuProps> = ({
  activeIndex = 0,
  scale = scales.MD,
  variant = variants.PRIMARY,
  onItemClick,
  disabled,
  children,
  fullWidth = false,
  ...props
}) => {
  return (
    <StyledButtonMenu
      disabled={disabled}
      variant={variant}
      fullWidth={fullWidth}
      {...props}
    >
      {Children.map(children, (child: ReactElement, index) => {
        return cloneElement(child, {
          isActive: activeIndex === index,
          onClick: onItemClick ? () => onItemClick(index) : undefined,
          scale,
          variant,
          disabled,
        })
      })}
    </StyledButtonMenu>
  )
}

export default ButtonMenu
