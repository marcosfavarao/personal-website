import { Overpage } from '../../components';
import { useNavigation } from '../../hooks';
import { Container } from './experiences.styles';

export const Experiences = () => {
  const { toggleExperiencesPage, setToggleExperiencesPage } = useNavigation();

  return (
    <Overpage
      showPageContent={toggleExperiencesPage}
      onClosePageContent={() => setToggleExperiencesPage(false)}
    >
      <Container>
        <h1>Experiences</h1>
        <p>My job experience</p>
      </Container>
    </Overpage>
  );
};
