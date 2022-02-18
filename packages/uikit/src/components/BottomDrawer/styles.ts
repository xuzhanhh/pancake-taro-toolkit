/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from '@binance/mp-styled'

const MountAnimation = keyframes`
0% {
	bottom: -100vh;
}
100% {
	bottom: -1vh;
}
`

const UnmountAnimation = keyframes`
    0% {
      bottom: -1vh
    }
    100% {
      bottom: v100vh
    }
  `

export const DrawerContainer = styled.div<{ isUnmounting: boolean }>`
  width: 100%;
  height: 81vh;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  position: fixed;
  left: 0;
  animation: ${MountAnimation} 350ms ease forwards;
  padding-bottom: env(safe-area-inset-bottom);
  z-index: 21;
  ${({ isUnmounting }) =>
    isUnmounting &&
    `animation: ${UnmountAnimation} 350ms ease forwards;
    `}
`
