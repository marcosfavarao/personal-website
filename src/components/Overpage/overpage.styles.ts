import styled, { css, keyframes } from 'styled-components';

// Interfaces
interface ContentPageProps {
  showPageContent: boolean;
}

// Animations
const showContentAnimation = keyframes`
  0% {
    -webkit-transform: translateY(100vh);
    transform: translateY(100vh);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0vh);
    transform: translateY(0vh);
    opacity: 1;
  }
`;
const hideContentAnimation = keyframes`
  0% {
    -webkit-transform: translateY(0vh);
    transform: translateY(0vh);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(100vh);
    transform: translateY(100vh);
    opacity: 0;
  }
`;

const arrowOnFocusAnimation = keyframes`
  0% {
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(-50%, 4px, 0);
    transform: translate3d(-50%, 4px, 0);
  }
`;
const arrowOutFocusAnimation = keyframes`
  0% {
    -webkit-transform: translate3d(-50%, 4px, 0);
    transform: translate3d(-50%, 4px, 0);
  }
  100% {
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
  }
`;

// Code Style
export const Container = styled.div`
  width: 100%;
  position: relative;
  z-index: 99;
`;

export const ContentPage = styled.div<ContentPageProps>`
  background: var(--color-background);

  transform: translateY(100vh); // Content is put out of view
  opacity: 0; // Content is hidded

  width: 100%;
  height: 98vh;

  position: fixed;
  bottom: 0;
  left: 0;

  border: 0;
  border-radius: 25px 25px 0 0;
  box-shadow: 0px -4px 8px -1px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  /* animation: ${showContentAnimation} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both; */
  /* animation: ${hideContentAnimation} 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both; */

  ${({ showPageContent }) =>
    showPageContent &&
    css`
      animation: ${showContentAnimation} 0.8s
        cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    `}

  /* ${({ showPageContent }) =>
    showPageContent
      ? css`
          animation: ${showContentAnimation} 0.8s
            cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        `
      : css`
          animation: ${hideContentAnimation} 0.8s
            cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
        `} */
  svg {
    width: 50px;
    height: 50px;

    margin: 2rem 0;

    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);

    cursor: pointer;

    -webkit-animation: ${arrowOutFocusAnimation} 0.5s linear both;
    animation: ${arrowOutFocusAnimation} 0.5s linear both;

    transition: all 0.5s;
    &:hover {
      color: var(--color-green);
      -webkit-animation: ${arrowOnFocusAnimation} 0.5s linear both;
      animation: ${arrowOnFocusAnimation} 0.5s linear both;
    }
  }
`;
