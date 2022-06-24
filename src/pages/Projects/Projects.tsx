import { FaGithub } from 'react-icons/fa';
import { useNavigation } from '../../hooks';
import { Overpage } from '../../components';

import {
  project01Image,
  project02Image,
  project03Image,
} from '../../common/assets/images';
import { Container, Header, Content, Card, CardTitle } from './projects.styles';

export const Projects = () => {
  const { toggleProjectsPage, setToggleProjectsPage } = useNavigation();

  return (
    <Overpage
      showPageContent={toggleProjectsPage}
      onClosePageContent={() => setToggleProjectsPage(false)}
      pageTitle="Projects"
    >
      <Container>
        <Header>
          <p>
            Just a list of my personal projects that I dedicated myself to
            develop and also, as references for studies.
          </p>
        </Header>

        <Content>
          <Card
            href="https://github.com/marcosfavarao/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project01Image} alt="Project 01" />
            <FaGithub />

            <CardTitle>Portfolio</CardTitle>
          </Card>

          <Card
            href="https://github.com/marcosfavarao/ignite-reactjs-chapter-2"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project02Image} alt="Project 02" />
            <FaGithub />

            <CardTitle>DT Money</CardTitle>
          </Card>

          <Card
            href="https://github.com/marcosfavarao/waffles-receipt"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project03Image} alt="Project 03" />
            <FaGithub />
            <CardTitle>Waffles Receipt</CardTitle>
          </Card>
        </Content>
      </Container>
    </Overpage>
  );
};
