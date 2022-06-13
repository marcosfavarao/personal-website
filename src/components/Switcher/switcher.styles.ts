import styled, { css, keyframes } from 'styled-components';

// Interfaces and Prop Types
interface TogglerProps {
  onActivate: boolean;
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
  background-color: #c0c0c0;

  width: 50px;
  height: 20px;

  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 32px;

  position: fixed;
  top: 60px;
  right: 65px;

  box-shadow: inset 0px 0px 4px 1px rgba(0, 0, 0, 0.1);

  z-index: 100;

  transition: 300ms all;
  animation: ${showComponent} 800ms;
`;

export const Toggler = styled.button<TogglerProps>`
  background: var(--color-green);
  color: #fcfcfc;

  width: 32px;
  height: 32px;

  border: 0;
  border-radius: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.25);

  position: absolute;
  top: 50%;
  left: 0%;
  transform: ${({ onActivate }) =>
    !onActivate ? css`translate(-2%, -50%)` : css`translate(54%, -50%)`};

  transition: 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) transform;

  svg {
    width: 18px;
    height: 18px;
  }
`;
