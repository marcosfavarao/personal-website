import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  overflow: auto;
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
  margin: 0 auto;
  margin-top: 4rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: row;

  @media (max-width: 915px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;

    div {
      width: 100%;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
`;

export const BlockContent = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 4rem;

  h1 {
    text-align: left;
    text-transform: none;
    font-size: 2rem;
    line-height: 2rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 915px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const Information = styled.div`
  text-align: left;
  text-transform: none;
  line-height: 2rem;

  h3 {
    margin: 0.25rem 0;
  }

  p {
    font-weight: 400;
    line-height: 1.75rem;
    & + p {
      font-weight: 300;
    }
  }

  & + & {
    margin-top: 1.5rem;
  }
`;
