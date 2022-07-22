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
  width: 3rem;
  height: 1rem;

  border-radius: 1.5rem;
  position: fixed;
  top: 4rem;
  right: 4rem;

  border: 0;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.28);

  z-index: 100;

  transition: all ${({ theme }) => theme.transitions.slow};
  animation: ${showComponent} ${({ theme }) => theme.transitions.slow}
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @media (max-width: 768px) {
    top: 2rem;
    right: 2rem;
  }
`;

export const Toggler = styled.button<TogglerProps>`
  background: ${({ theme }) => theme.colors.secondary};
  width: 2rem;
  height: 2rem;

  border: 0;
  border-radius: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 50%;
  left: 0;
  transform: ${({ onCheck }) =>
    onCheck ? `translate(58%, -50%)` : `translate(-2%, -50%)`};
  transition: all ${({ theme }) => theme.transitions.fast} ease-out;

  svg {
    color: ${({ theme }) => lighten(0.08, theme.colors.primary)};
    width: 1.25rem;
    height: 1.25rem;
  }

  &:hover {
    filter: drop-shadow(
      0 0 8px ${({ theme }) => transparentize(0.8, theme.colors.secondary)}
    );
  }
`;
