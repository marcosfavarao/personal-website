import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 1rem;
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

export const SocialBar = styled.section`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  margin-top: 4rem;

  @media (max-width: 915px) {
    margin-top: 3.6rem;
  }
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
