import styled from 'styled-components';
import { transparentize } from 'polished';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: auto;
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
  padding: 2rem;

  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(250px, 1fr)
  ); // Needs to be same width as sticker content
  grid-gap: 1rem;

  align-self: center;
  justify-items: center;

  @media (max-width: 915px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Sticker = styled.div`
  background: ${({ theme }) => theme.colors.background};
  width: 250px;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  border: 1px solid
    ${({ theme }) =>
      theme.title !== 'lightTheme'
        ? transparentize(0.8, theme.colors.primary)
        : theme.colors.primary};
  border-radius: 0.5rem;
  box-shadow: 0 0 4px 1px
    ${({ theme }) => transparentize(0.8, theme.colors.primary)};

  transition: all ${({ theme }) => theme.transitions.fast};

  img {
    width: 4rem;
    height: 4rem;
    margin-left: 1rem;
    border-radius: 0.5rem;
    transition: all ${({ theme }) => theme.transitions.fast};
  }

  span {
    margin-left: 1rem;
    transition: all ${({ theme }) => theme.transitions.fast};
  }

  &:hover {
    background: ${({ theme }) => transparentize(0.9, theme.colors.secondary)};
    border: 1px solid
      ${({ theme }) => transparentize(0.8, theme.colors.secondary)};
    box-shadow: 0 0 4px 1px
      ${({ theme }) => transparentize(0.8, theme.colors.secondary)};
  }

  @media (max-width: 915px) {
    width: 10rem;
    height: 5rem;
    font-size: 0.8rem;

    img {
      width: 3rem;
      height: 3rem;
    }

    span {
      margin-left: 0.8rem;
    }
  }
`;
