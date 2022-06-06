import styled, { keyframes, css } from 'styled-components';
import { darken } from 'polished';

// Interfaces
interface RoundedButtonProps {
  toggleSwitcher: boolean;
}

// Animations
const enableSwitcherAnimation = keyframes`
  from {
    transform: translate(-100%, -50%);
  }
  to {
    transform: translate(0%, -50%);
  }
`;

const disableSwitcherAnimation = keyframes`
  from {
    transform: translate(0%, -50%);
  }
  to {
    transform: translate(-100%, -50%);
  }
`;

// Code Style
export const Container = styled.div`
  background: #c0c0c0;

  width: 40px;
  height: 20px;

  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 16px;

  position: fixed;
  top: 50px;
  right: 50px;

  z-index: 100;
`;

export const RoundedButton = styled.button<RoundedButtonProps>`
  background: var(--color-green);

  width: 28px;
  height: 28px;

  border: 0;
  border-radius: 16px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-100%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ toggleSwitcher }) =>
    toggleSwitcher &&
    css`
      -webkit-animation: ${enableSwitcherAnimation} 0.5s
        cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: ${enableSwitcherAnimation} 0.5s
        cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    `}

  ${({ toggleSwitcher }) =>
    !toggleSwitcher &&
    css`
      -webkit-animation: ${disableSwitcherAnimation} 0.5s
        cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: ${disableSwitcherAnimation} 0.5s
        cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    `}

  transition: all 0.5s;
  &:hover {
    background: ${darken(0.06, '#169a67')};
  }

  svg {
    color: white;

    width: 16px;
    height: 16px;
  }
`;
