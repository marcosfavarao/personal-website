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
              src="https://ik.imagekit.io/marcosfavarao/dashboard/personal-website/portfolio_0XcoUg8GH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660342943199"
              alt="Project 01"
            />
            <FaGithub />

            <CardTitle>Portfolio</CardTitle>
          </Card>

          <Card
            href="https://github.com/marcosfavarao/todo-app"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://ik.imagekit.io/marcosfavarao/dashboard/personal-website/todo-app_4a7awItHk.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660342942779"
              alt="Project 02"
            />
            <FaGithub />
            <CardTitle>To-do App</CardTitle>
          </Card>

          <Card
            href="https://github.com/marcosfavarao/ignite-reactjs-chapter-2"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://ik.imagekit.io/marcosfavarao/dashboard/personal-website/dt-money_unZ9wI3fm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660342942681"
              alt="Project 03"
            />
            <FaGithub />

            <CardTitle>DT Money</CardTitle>
          </Card>
        </Content>
      </Container>
    </Overpage>
  );
};
