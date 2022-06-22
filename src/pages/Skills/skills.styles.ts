import styled from 'styled-components';
import { transparentize } from 'polished';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Header = styled.header`
  width: 100%;
  margin: 0 auto;

  text-align: center;
  text-transform: none;
  font-size: 1.2rem;
  line-height: 2rem;
  padding: 2rem;
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
`;

export const Sticker = styled.div`
  background: ${({ theme }) => theme.colors.background};
  width: 250px;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  border: 1px solid ${({ theme }) => transparentize(0.8, theme.colors.primary)};
  border-radius: 8px;

  transition: all 300ms;
  img {
    width: 64px;
    height: 64px;
    margin-left: 1rem;
  }

  span {
    margin-left: 1rem;
  }

  &:hover {
    border: 1px solid
      ${({ theme }) => transparentize(0.8, theme.colors.secondary)};
  }
`;
