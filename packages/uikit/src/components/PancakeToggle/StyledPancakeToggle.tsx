import { Switch as TaroSwitch, Label as TaroLabel } from '@tarojs/components'
import styled from '../../theme/utils/styled'
import { Box } from '../Box'
import {
  scales,
  PancakeToggleProps,
  HandleProps,
  InputProps,
  ScaleKeys,
} from './types'

const scaleKeyValues = {
  sm: {
    pancakeSize: '14px', // The size of a pancake (the handle)
    travelDistance: '14px', // How far pancakes should travel horizontally
    toggleHeight: '20px', // General Height and
    toggleWidth: '36px', // Width of a toggle box
    pancakeThickness: '1px', // Bottom shadow of a pancake
    pancakeTwoOffset: '0px', // Pancakes don't look good when they are concentric
    pancakeThreeOffset: '-3px', // so pancake 2 and 3 are shifted a little bit
    butterTop: '3px', // Fine adjustments for butter position
    butterLeft: '10px',
    butterWidth: '6px', // Widht and
    butterHeight: '5px', // Height of a butter block on top of pancakes
    butterThickness: '0.5px', // Shadow on the bottom of the butter block
    butterRadius: '2px', // Rounded corners for the butter
    butterSmearOneTop: '10px', // There is melted butter
    butterSmearOneLeft: '2.5px', // next to the butter block
    butterSmearTwoTop: '11px', // implemented with :before and :after
    butterSmearTwoRight: '2.5px', // these values adjust the position of it
  },
  md: {
    pancakeSize: '24px',
    travelDistance: '24px',
    toggleHeight: '32px',
    toggleWidth: '56px',
    pancakeThickness: '1.5px',
    pancakeTwoOffset: '-1px',
    pancakeThreeOffset: '-6px',
    butterTop: '5px',
    butterLeft: '13px',
    butterWidth: '10px',
    butterHeight: '8px',
    butterThickness: '0.75px',
    butterRadius: '3px',
    butterSmearOneTop: '15px',
    butterSmearOneLeft: '3.75px',
    butterSmearTwoTop: '16px',
    butterSmearTwoRight: '3.75px',
  },
  lg: {
    pancakeSize: '31px',
    travelDistance: '31px',
    toggleHeight: '40px',
    toggleWidth: '72px',
    pancakeThickness: '2px',
    pancakeTwoOffset: '-3px',
    pancakeThreeOffset: '-8px',
    butterTop: '3px',
    butterLeft: '16px',
    butterWidth: '12px',
    butterHeight: '11px',
    butterThickness: '1px',
    butterRadius: '4px',
    butterSmearOneTop: '20px',
    butterSmearOneLeft: '5px',
    butterSmearTwoTop: '22px',
    butterSmearTwoRight: '5px',
  },
}

const getScale =
  (property: ScaleKeys) =>
  ({ scale = scales.LG }: PancakeToggleProps) => {
    return scaleKeyValues[scale][property]
  }

export const PancakeStack = styled(Box)<HandleProps>({
  sx: {
    position: 'relative',
    display: 'inline-block',
    '.pancakes': {
      position: 'absolute',
      transition: '0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    },
    '.pancake': {
      background: '#e27c31;',
      borderRadius: '50%;',
      width: getScale('pancakeSize'),
      height: getScale('pancakeSize'),
      position: 'absolute;',
      transition: '0.4s ease;',
      top: '2px;',
      left: '4px;',
      boxShadow: (props) =>
        `0 ${getScale('pancakeThickness')(props)} 0 ${getScale(
          'pancakeThickness',
        )(props)} #fbbe7c`,
    },
    '.pancake:nth-child(1)': {
      background: ({ theme }) => theme.pancakeToggle.handleBackground,
      boxShadow: (props) =>
        `0 ${getScale('pancakeThickness')(props)} 0 ${getScale(
          'pancakeThickness',
        )(props)} ${props.theme.pancakeToggle.handleShadow}`,
    },
    '.pancake:nth-child(2)': {
      left: 0,
      top: getScale('pancakeTwoOffset'),
      transform: 'scale(0)',
      transition: '0.2s ease 0.2s',
    },
    '.pancake:nth-child(3)': {
      top: getScale('pancakeThreeOffset'),
      transform: 'scale(0)',
      transition: '0.2s ease 0.2s',
    },
    '.butter': {
      width: getScale('butterWidth'),
      height: getScale('butterHeight'),
      background: '#fbdb60',
      top: getScale('butterTop'),
      left: getScale('butterLeft'),
      position: 'absolute',
      borderRadius: getScale('butterRadius'),
      boxShadow: (props) =>
        `0 ${getScale('butterThickness')(props)} 0 ${getScale(
          'butterThickness',
        )(props)} #d67823`,
      transform: 'scale(0)',
      transition: '0.2s ease',
    },
  },
})

export const PancakeInput = styled(TaroSwitch)<InputProps>({
  isUikitComponent: false,
  attrs: {
    type: 'switch',
  },
  sx: {
    height: '100%',
    left: '0',
    opacity: '0',
    position: 'absolute',
    top: '0',
    width: '100%',
    zIndex: '10',
    '&:focus + label': {
      boxShadow: ({ theme }) => theme.shadows.focus,
    },
    '&[checked=true] + bn-label .pancakes': {
      transform: (props) => `translateX(${getScale('travelDistance')(props)})`,
    },
    '&[checked=true] + bn-label .pancake:nth-child(1)': {
      background: '#e27c31',
      boxShadow: (props) => `0 ${getScale('pancakeThickness')(props)} 0
      ${getScale('pancakeThickness')(props)} #fbbe7c;
    transition-delay: 0.2s;`,
    },
    '&[checked=true] + bn-label .pancake:nth-child(2)': {
      transform: 'scale(1)',
      transitionDelay: '0.2s',
    },
    '&[checked=true] + bn-label .pancake:nth-child(3)': {
      transform: 'scale(1)',
      transitionDelay: '0.4s',
    },
    '&[checked=true] + bn-label .butter': {
      transform: 'scale(1)',
      transitionDelay: '0.6s',
    },
  },
})

export const PancakeLabel = styled(TaroLabel)<PancakeToggleProps>({
  isUikitComponent: false,
  sx: {
    width: getScale('toggleWidth'),
    height: getScale('toggleHeight'),
    background: ({ theme, checked }) =>
      theme.colors[checked ? 'success' : 'input'],
    boxShadow: ({ theme }) => theme.shadows.inset,
    display: 'inline-block',
    borderRadius: '50px',
    position: 'relative',
    transition: 'all 0.3s ease',
    transformOrigin: '20% center',
    cursor: 'pointer',
  },
})
