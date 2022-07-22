import styled from 'styled-components';

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

  a {
    text-decoration: underline;
    transition: all ${({ theme }) => theme.transitions.fast};
    font-weight: bold;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  @media (max-width: 915px) {
    font-size: 1rem;
  }
`;

export const Content = styled.section`
  width: 100%;
`;

export const Block = styled.div`
  width: 100%;

  text-transform: none;
  font-size: 1rem;
  line-height: 2rem;
  text-align: left;
  margin: 2rem auto;

  p {
    margin-left: 1.25rem;
  }

  span {
    text-decoration: underline;
    transition: all ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
