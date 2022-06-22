import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: auto;
`;

export const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;

  text-align: center;
  text-transform: none;
  font-size: 1.2rem;
  line-height: 2rem;
`;

export const Content = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`;

export const BlockContent = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  h1 {
    text-align: left;
    text-transform: none;
    font-size: 2rem;
    line-height: 2rem;
    margin: 2rem 0;
  }
`;

export const Information = styled.div`
  text-align: left;
  text-transform: none;
  line-height: 2rem;

  h3 {
    margin: 0.5rem 0;
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
