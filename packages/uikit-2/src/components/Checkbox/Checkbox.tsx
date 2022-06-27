import React, { useEffect } from 'react'
import { styled } from '@pancakeswap/mp-styled-2'
import { Box } from '../Box'
import { Checkbox as TaroCheckbox } from '@tarojs/components'
import { CheckboxProps, scales, Scales } from './types'

const getScale = ({ scale }: CheckboxProps) => {
  switch (scale) {
    case scales.SM:
      return '24px'
    case scales.MD:
    default:
      return '32px'
  }
}
interface CheckboxIconProps {
  checked?: boolean
  disabled?: boolean
  scale?: Scales
}
const StyledCheckboxIcon = styled(Box)<CheckboxIconProps>`
  position: absolute;
  border-bottom: 2px solid;
  border-left: 2px solid;
  border-color: ${({ checked }) => (checked ? 'white' : 'transparent')};
  top: 30%;
  left: 0;
  right: 0;
  width: 50%;
  height: 25%;
  margin: auto;
  transform: rotate(-50deg);
  transition: border-color 0.2s ease-in-out;
`
// borderColor: ({ checked }) => (checked ? 'white' : 'transparent'),

const StyledCheckboxIconWrap = styled(Box)<CheckboxIconProps>`
  appearance: none;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  display: inline-block;
  height: ${getScale};
  width: ${getScale};
  vertical-align: middle;
  transition: background-color 0.2s ease-in-out;
  border: 0;
  border-radius: 8px;
  background-color: ${({ theme, checked }) => (checked ? theme.colors.success : theme.colors.input)};
  box-shadow: ${({ theme }) => theme.shadows.inset};

  &:hover:not(:disabled):not(:checked) {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }
  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }

  &:checked {
    background-color: ${({ theme }) => theme.colors.success};
  }

  &:disabled {
    cursor: default;
    opacity: 0.6;
  }
`
const CheckboxIcon = (props: CheckboxIconProps) => (
  <StyledCheckboxIconWrap {...props}>
    <StyledCheckboxIcon {...props} />
  </StyledCheckboxIconWrap>
)

const Checkbox = (allProps: CheckboxProps) => {
  const {
    className,
    sx,
    defaultChecked = false,
    checked,
    indeterminate = false,
    scale,
    onChange,
    disabled,
    name,
    children = null,
    style,
    ...props
  } = allProps
  const size = getScale({ scale })
  const { current: isControlled } = React.useRef(checked != null)
  const [checkedValue, setCheckedValue] = React.useState(defaultChecked)
  useEffect(() => {
    if (isControlled && checked !== checkedValue) {
      setCheckedValue(checked === undefined ? false : checked)
    }
  }, [checked])

  return (
    <Box
      className={className}
      sx={sx}
      __css={{
        width: size,
        height: size,
        position: 'relative',
        display: 'inline-flex',
      }}
      onClick={() => {
        if (!disabled) {
          let toggleValue = !checkedValue
          if (!isControlled) setCheckedValue(toggleValue)
          onChange && onChange(toggleValue)
        }
      }}
      style={style}
    >
      <TaroCheckbox
        {...props}
        // @ts-ignore value undefined
        value={name}
        name={name}
        checked={checkedValue}
        disabled={disabled}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          opacity: '0',
          pointerEvents: 'none',
        }}
        data-indeterminate={checkedValue && indeterminate}
        onChange={() => {
          let toggleValue = !checkedValue
          if (!isControlled) setCheckedValue(toggleValue)
          onChange && onChange(toggleValue)
        }}
      />
      <CheckboxIcon scale={scale} checked={checkedValue} disabled={disabled} />
      {children}
    </Box>
  )
}

Checkbox.displayName = 'Checkbox'
export default Checkbox
