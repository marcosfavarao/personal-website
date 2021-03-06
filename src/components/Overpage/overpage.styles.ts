import styled, { css, keyframes } from 'styled-components';

// Interfaces and Props
interface ContainerProps {
  showPageContent: boolean;
}

interface HeaderProps {
  iconSize: number;
}

// Animations
const showElement = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const hideElement = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

// Code Style
export const Container = styled.div<ContainerProps>`
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: 98vh;

  overflow: auto;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  border: 0;
  border-radius: 1.5rem 1.5rem 0 0;
  box-shadow: 0px -4px 8px -1px rgba(0, 0, 0, 0.2);

  z-index: 99;

  transform: ${({ showPageContent }) =>
    showPageContent ? `translateY(0vh)` : `translateY(100vh)`};
  transition: transform ${({ theme }) => theme.transitions.slow}
      cubic-bezier(0.39, 0.575, 0.565, 1),
    background ${({ theme }) => theme.transitions.slow};

  opacity: ${({ showPageContent }) => (showPageContent ? `1` : `0`)};
  pointer-events: ${({ showPageContent }) =>
    showPageContent ? `all` : `none`};

  ${({ showPageContent }) =>
    showPageContent
      ? css`
          animation: ${showElement} ${({ theme }) => theme.transitions.slow};
        `
      : css`
          animation: ${hideElement} ${({ theme }) => theme.transitions.slow};
        `}
`;

export const Content = styled.main`
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;
`;

export const Header = styled.header<HeaderProps>`
  display: grid;
  place-items: center;

  svg {
    /* => Another way for centering an SVG element.
     * display: block;
     * margin: 0 auto;
    */

    width: ${({ iconSize }) => iconSize || '50'}px;
    height: ${({ iconSize }) => iconSize || '50'}px;

    margin: 2rem;

    cursor: pointer;

    transition: all ${({ theme }) => theme.transitions.fast}
      cubic-bezier(0.39, 0.575, 0.565, 1);

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
      transform: translateY(8px);
    }
  }

  h1 {
    text-align: center;
    margin-bottom: 2rem;

    font-size: 3rem;
    font-weight: 700;

    line-height: 4rem;
    text-transform: capitalize;
  }
`;
