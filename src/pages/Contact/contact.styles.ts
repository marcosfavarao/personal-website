import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 2rem;
  overflow: auto;
`;

export const Header = styled.header`
  width: 100%;
  margin: 0 auto;

  text-align: center;
  text-transform: none;
  font-size: 1.2rem;
  line-height: 2rem;
`;

export const Form = styled.form``;

export const Content = styled.section`
  width: 100%;
  text-align: center;
  margin: 0 auto;
  margin-top: 8rem;
`;

export const Social = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;

  a {
    margin: 1rem;

    svg {
      width: 32px;
      height: 32px;

      transition: all 300ms;
      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
        transform: translateY(-4px);
      }
    }
  }
`;
