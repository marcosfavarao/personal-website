import { useNavigation } from '../../hooks';
import { Overpage } from '../../components';

import { Container } from './projects.styles';

export const Projects = () => {
  const { toggleProjectsPage, setToggleProjectsPage } = useNavigation();

  return (
    <Overpage
      showPageContent={toggleProjectsPage}
      onClosePageContent={() => setToggleProjectsPage(false)}
    >
      <Container>
        <h1>Projects</h1>
        <p>Personal Projects</p>
      </Container>
    </Overpage>
  );
};
