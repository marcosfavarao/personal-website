import styled, { keyframes } from 'styled-components';
import { transparentize } from 'polished';

import { IoMdMenu, IoIosArrowUp } from 'react-icons/io';

// Interfaces and Props
interface MobileMenuProps {
  toggleMobileMenu: boolean;
}

interface MobileMenuHomeIconProps {
  isMobileMenuOpen: boolean;
}

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

const mobileArrowAnimation = keyframes`
  0% {
    -webkit-transform: translate3d(-50%, -10%, 0);
    transform: translate3d(-50%, -10%, 0);
  }
  50% {
    -webkit-transform: translate3d(-50%, -20%, 0);
    transform: translate3d(-50%, -20%, 0);
  }
  100% {
    -webkit-transform: translate3d(-50%, -10%, 0);
    transform: translate3d(-50%, -10%, 0);
  }
`;

// Code Style
export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 5rem;

  @media (max-width: 915px) {
    margin: 0;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
  }
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

  -webkit-animation: ${profileAnimation}
    ${({ theme }) => theme.transitions.slow}
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: ${profileAnimation} ${({ theme }) => theme.transitions.slow}
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  img {
    width: 256px;

    object-fit: cover;
    margin-bottom: 2rem;

    border: 8px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 256px;

    transition: all ${({ theme }) => theme.transitions.slow};
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

  @media (max-width: 915px) {
    img {
      width: 200px;
    }

    h1 {
      font-size: 2rem;
      line-height: 32px;
    }

    h2 {
      font-size: 1.25rem;
      font-weight: 600;

      line-height: 32px;
      text-transform: capitalize;
    }
  }
`;

export const Navbar = styled.nav`
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

  -webkit-animation: ${navbarAnimation} ${({ theme }) => theme.transitions.slow}
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: ${navbarAnimation} ${({ theme }) => theme.transitions.slow}
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @media (max-width: 915px) {
    opacity: 0;
    display: none;
    pointer-events: none;
  }
`;

export const NavbarButton = styled.button`
  background: transparent;

  padding: 1rem;
  margin: 0.5rem;
  border: 0;

  font-size: 2rem;
  font-weight: 600;
  line-height: 32px;
  text-align: center;
  text-transform: capitalize;

  transition: all ${({ theme }) => theme.transitions.fast};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.secondary};
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
`;

export const MobileMenu = styled.div<MobileMenuProps>`
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: 100%;

  position: absolute;
  inset: 0;

  display: none;
  pointer-events: none;
  z-index: 100;

  opacity: ${({ toggleMobileMenu }) => (toggleMobileMenu ? `1` : `0`)};
  box-shadow: 0 0 8px 1px
    ${({ theme }) => transparentize(0.8, theme.colors.secondary)} inset;

  transform: ${({ toggleMobileMenu }) =>
    toggleMobileMenu ? `translateY(0%)` : `translateY(-100%)`};
  transition: all ${({ theme }) => theme.transitions.slow} ease-in-out;

  @media (max-width: 915px) {
    display: block;
    pointer-events: all;
  }
`;

export const MobileNavbar = styled.nav`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const MobileNavbarButton = styled.button`
  background: transparent;

  width: 80px;
  height: 40px;
  margin: 0.25rem 0;

  border: 0;
  font-size: 1rem;
  font-weight: 600;
  line-height: 16px;
  text-align: center;
  text-transform: capitalize;

  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const MobileMenuHomeIcon = styled(IoMdMenu)<MobileMenuHomeIconProps>`
  width: 32px;
  height: 32px;

  position: absolute;
  top: 24px;
  left: 32px;

  opacity: 0;
  cursor: pointer;
  pointer-events: ${({ isMobileMenuOpen }) =>
    isMobileMenuOpen ? `none` : `all`};
  z-index: 100;

  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: 915px) {
    opacity: 1;
    pointer-events: all;

    top: 50px;
  }

  @media (max-width: 768px) {
    opacity: 1;
    pointer-events: all;

    top: 24px;
  }
`;

export const MobileMenuArrowIcon = styled(IoIosArrowUp)`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 50%;
  bottom: 0%;
  cursor: pointer;
  transform: translate3d(-50%, -10%, 0);
  transition: color ${({ theme }) => theme.transitions.fast};
  animation: ${mobileArrowAnimation} 4000ms infinite;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
