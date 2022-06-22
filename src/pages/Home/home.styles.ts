import styled, { keyframes } from 'styled-components';

// Animations
const profileAnimation = keyframes`
  0% {
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
    opacity: 0;
  }
  90% {
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;

const navbarAnimation = keyframes`
  0% {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    opacity: 0;
  }
  90% {
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;

const buttonInFocusAnimation = keyframes`
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
`;

const buttonOutFocusAnimation = keyframes`
  0% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;

// Code Style
export const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 5rem;
`;

export const Profile = styled.section`
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  text-align: center;

  -webkit-animation: ${profileAnimation} 750ms
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: ${profileAnimation} 750ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  img {
    width: 256px;

    object-fit: cover;
    margin-bottom: 2rem;

    border: 8px solid var(--color-green);
    border-radius: 256px;
  }

  h1 {
    font-size: 3rem;
    font-weight: 700;

    line-height: 64px;
    text-transform: capitalize;
  }

  h2 {
    font-size: 2rem;
    font-weight: 600;

    line-height: 64px;
    text-transform: capitalize;
  }
`;

export const Navbar = styled.footer`
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;
  margin-bottom: 4rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  -webkit-animation: ${navbarAnimation} 0.75s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: ${navbarAnimation} 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const Button = styled.button`
  background: transparent;

  padding: 1rem;
  margin: 0.5rem;
  border: 0;

  font-size: 2rem;
  font-weight: 600;
  line-height: 32px;
  text-align: center;
  text-transform: capitalize;

  -webkit-animation: ${buttonOutFocusAnimation} 0.5s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: ${buttonOutFocusAnimation} 0.5s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  transition: color 250ms;
  &:hover,
  &:focus {
    color: var(--color-green);

    -webkit-animation: ${buttonInFocusAnimation} 500ms
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: ${buttonInFocusAnimation} 500ms
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
`;
