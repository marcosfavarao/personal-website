import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 2rem;
`;

export const Header = styled.header`
  text-align: center;
  text-transform: none;
  font-size: 1.2rem;
  line-height: 2rem;
  user-select: none;

  a {
    text-decoration: underline;
    transition: all 300ms;
    font-weight: bold;
    &:hover {
      color: var(--color-green);
    }
  }
`;

export const Content = styled.section`
  width: 100%;
`;

export const Block = styled.div`
  width: 100%;
  user-select: none;
  text-transform: none;
  font-size: 1rem;
  line-height: 2rem;
  text-align: left;
  margin: 2rem auto;
  p {
    margin-left: 22px;
  }
  span {
    text-decoration: underline;
    transition: all 300ms;
    &:hover {
      color: var(--color-green);
    }
  }
`;
