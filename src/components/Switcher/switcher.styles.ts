import styled, { css, keyframes } from 'styled-components';

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
  width: 50px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.primary};

  border: 0;
  border-radius: 20px;

  position: fixed;
  top: 64px;
  right: 64px;
`;

export const Toggler = styled.button<TogglerProps>`
  background: ${({ theme }) => theme.colors.green};
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
    onCheck ? `translate(0, -50%)` : `translate(18px, -50%)`};
  transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

  svg {
    width: 20px;
    height: 20px;
  }
`;
