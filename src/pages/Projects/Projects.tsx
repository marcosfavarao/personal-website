import { FaGithub } from 'react-icons/fa';
import { useNavigation } from '../../hooks';
import { Overpage } from '../../components';

import project1Img from '../../common/assets/images/project1-image.png';
import project2Img from '../../common/assets/images/project2-image.png';
import project3Img from '../../common/assets/images/project3-image.png';
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
            <img src={project1Img} alt="Project 01" />
            <FaGithub />

            <CardTitle>Portfolio</CardTitle>
          </Card>

          <Card
            href="https://github.com/marcosfavarao/ignite-reactjs-chapter-2"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project2Img} alt="Project 02" />
            <FaGithub />

            <CardTitle>DT Money</CardTitle>
          </Card>

          <Card
            href="https://github.com/marcosfavarao/waffles-receipt"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project3Img} alt="Project 03" />
            <FaGithub />
            <CardTitle>Waffles Receipt</CardTitle>
          </Card>
        </Content>
      </Container>
    </Overpage>
  );
};
