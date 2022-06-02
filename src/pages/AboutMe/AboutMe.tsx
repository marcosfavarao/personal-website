import { Overpage } from '../../components';
import { Container } from './aboutme.styles';

interface AboutMeProps {
  openPage: boolean;
  onClosePage: () => void;
}

export const AboutMe = ({ openPage, onClosePage }: AboutMeProps) => {
  return (
    <Overpage showPageContent={openPage} onClosePageContent={onClosePage}>
      <Container>
        AboutMe
        <h1>About</h1>
      </Container>
    </Overpage>
  );
};
