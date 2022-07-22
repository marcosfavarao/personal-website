import { FaGithub } from 'react-icons/fa';
import { useNavigation } from '../../hooks';
import { Overpage } from '../../components';

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
            <img
              src="https://ik.imagekit.io/marcosfavarao/dashboard/personal-website/project01_UzTUP3v0A.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658447322244"
              alt="Project 01"
            />
            <FaGithub />

            <CardTitle>Portfolio</CardTitle>
          </Card>

          <Card
            href="https://github.com/marcosfavarao/ignite-reactjs-chapter-2"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://ik.imagekit.io/marcosfavarao/dashboard/personal-website/project02_SpzOFGsHS.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658447321426"
              alt="Project 02"
            />
            <FaGithub />

            <CardTitle>DT Money</CardTitle>
          </Card>

          <Card
            href="https://github.com/marcosfavarao/waffles-receipt"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://ik.imagekit.io/marcosfavarao/dashboard/personal-website/project03_fSkRI_EP-.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658447324038"
              alt="Project 03"
            />
            <FaGithub />
            <CardTitle>Waffles Receipt</CardTitle>
          </Card>
        </Content>
      </Container>
    </Overpage>
  );
};
