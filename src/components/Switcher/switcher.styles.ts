import styled, { keyframes } from 'styled-components';
import { darken, lighten, transparentize } from 'polished';

// Interfaces and Props
interface TogglerProps {
  onCheck: boolean;
}

// Animations
const showComponent = keyframes`
  from {
    opacity: 0;
    transform: translateX(75px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

// Code Style
export const Container = styled.div`
  background: ${({ theme }) => darken(0.08, theme.colors.primary)};
  width: 50px;
  height: 18px;

  border-radius: 20px;
  position: fixed;
  top: 64px;
  right: 64px;

  border: 0;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.28);

  z-index: 100;

  /* transition: all 800ms; */
  animation: ${showComponent} ${({ theme }) => theme.transitions.slow}
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @media (max-width: 768px) {
    top: 32px;
    right: 16px;
  }
`;

export const Toggler = styled.button<TogglerProps>`
  background: ${({ theme }) => theme.colors.secondary};
  width: 32px;
  height: 32px;

  border: 0;
  border-radius: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 0;
  top: 50%;
  transform: ${({ onCheck }) =>
    onCheck ? `translate(58%, -50%)` : `translate(-2%, -50%)`};
  transition: all ${({ theme }) => theme.transitions.fast} ease-out;

  svg {
    color: ${({ theme }) => lighten(0.08, theme.colors.primary)};
    width: 20px;
    height: 20px;
  }

  &:hover {
    filter: drop-shadow(
      0 0 8px ${({ theme }) => transparentize(0.8, theme.colors.secondary)}
    );
  }
`;
