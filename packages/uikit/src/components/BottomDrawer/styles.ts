/* eslint-disable import/prefer-default-export */
import { styled, keyframes } from '../../theme'
import { Box } from '../Box'

const MountAnimation = keyframes(`
0% {
	bottom: -100vh;
}
100% {
	bottom: -1vh;
}
`)

const UnmountAnimation = keyframes(`
    0% {
      bottom: -1vh
    }
    100% {
      bottom: v100vh
    }
  `)

export const DrawerContainer = styled(Box)<{ isUnmounting: boolean }>({
  sx: {
    width: '100%',
    height: '81vh',
    backgroundColor: ({ theme }) => theme.colors.backgroundAlt,
    borderTopLeftRadius: '32px',
    borderTopRightRadius: '32px',
    position: 'fixed',
		left:0,
    animation: `${MountAnimation} 350ms ease forwards`,
    paddingBottom: 'env(safe-area-inset-bottom)',
    zIndex: '21',
    isUnmounting: ({ isUnmounting }) =>
      isUnmounting && `animation: ${UnmountAnimation} 350ms ease forwards`,
  },
})
