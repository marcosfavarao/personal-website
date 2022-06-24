import styled from 'styled-components';
import { transparentize } from 'polished';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Header = styled.header`
  width: 100%;
  margin: 0 auto;

  text-align: center;
  text-transform: none;
  font-size: 1.2rem;
  line-height: 2rem;

  @media (max-width: 915px) {
    font-size: 1rem;
  }
`;

export const Content = styled.section`
  width: 100%;
  margin: 0 auto;
  margin-top: 4rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const Card = styled.a`
  width: 300px;
  height: 325px;
  position: relative;
  margin: 1rem;
  overflow: hidden;
  cursor: pointer;

  border: 1px solid
    ${({ theme }) =>
      theme.title !== 'lightTheme'
        ? transparentize(0.8, theme.colors.primary)
        : theme.colors.primary};
  border-radius: 8px;

  box-shadow: 0 0 4px 1px
    ${({ theme }) =>
      theme.title !== 'lightTheme'
        ? transparentize(0.8, theme.colors.primary)
        : theme.colors.primary};

  transition: all 300ms;

  svg {
    color: ${({ theme }) => transparentize(0.4, theme.colors.secondary)};
    width: 50px;
    height: 50px;

    position: absolute;
    top: calc(50% - 16px);
    left: 50%;
    transform: translate(-50%, -50%) scale(1.05);

    opacity: 0;
    transition: all 500ms;
  }

  img {
    width: 100%;
    height: 315px;
    border: 0;
    object-fit: cover;
    transition: all 500ms;
    filter: blur(1px);
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid
      ${({ theme }) => transparentize(0.8, theme.colors.secondary)};
    box-shadow: 0 0 4px 1px
      ${({ theme }) => transparentize(0.8, theme.colors.secondary)};

    svg {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }

    img {
      filter: blur(3px) grayscale(40%);
    }
  }

  @media (max-width: 915px) {
    border: 1px solid
      ${({ theme }) => transparentize(0.8, theme.colors.secondary)};
    box-shadow: 0 0 6px 1px
      ${({ theme }) => transparentize(0.8, theme.colors.secondary)};

    svg {
      opacity: 1;
    }
  }
`;

export const CardTitle = styled.footer`
  background: ${({ theme }) => theme.colors.background};
  padding: 1rem;
  width: 100%;
  margin: 0 auto;
  border: 0;

  text-align: center;
  text-transform: none;
  font-size: 1rem;
  font-weight: 600;
  line-height: 2rem;

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 1;
  transition: all 500ms;
`;
