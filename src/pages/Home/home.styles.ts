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
  position: relative;
`;

export const Profile = styled.div`
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;
  margin-top: 6rem;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  text-align: center;
  user-select: none;

  -webkit-animation: ${profileAnimation} 0.75s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: ${profileAnimation} 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

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

  user-select: none;

  -webkit-animation: ${navbarAnimation} 0.75s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: ${navbarAnimation} 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const Button = styled.button`
  background: transparent;

  padding: 1rem;
  margin: 0.5rem;
  border: 0;

  font-size: 1.75rem;
  font-weight: 600;
  text-align: center;

  line-height: 32px;
  text-transform: capitalize;

  -webkit-animation: ${buttonOutFocusAnimation} 0.5s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: ${buttonOutFocusAnimation} 0.5s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  transition: color 0.25s;

  &:hover {
    color: var(--color-green);

    -webkit-animation: ${buttonInFocusAnimation} 0.5s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: ${buttonInFocusAnimation} 0.5s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
`;
