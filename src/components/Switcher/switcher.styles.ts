import styled, { keyframes } from 'styled-components';

// Interfaces and Prop Types
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
  background: ${({ theme }) => theme.colors.primary};
  width: 50px;
  height: 18px;

  border-radius: 20px;
  position: fixed;
  top: 64px;
  right: 64px;

  border: 0;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);

  z-index: 100;

  transition: all 800ms;
  animation: ${showComponent} 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

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
  transition: all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

  svg {
    color: ${({ theme }) => theme.colors.primary};
    width: 20px;
    height: 20px;
  }
`;
