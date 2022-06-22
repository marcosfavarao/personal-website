import { useNavigation } from '../../hooks';
import { Overpage } from '../../components';

import {
  Container,
  Header,
  Content,
  BlockContent,
  Information,
} from './experiences.styles';

export const Experiences = () => {
  const { toggleExperiencesPage, setToggleExperiencesPage } = useNavigation();

  return (
    <Overpage
      showPageContent={toggleExperiencesPage}
      onClosePageContent={() => setToggleExperiencesPage(false)}
      pageTitle="Experiences"
    >
      <Container>
        <Header>
          <p>
            Minhas contribuições e{' '}
            <span>
              <a
                href="https://resume.io/r/bkAGBcy1d"
                target="_blank"
                rel="noreferrer"
              >
                experiências profissionais
              </a>
            </span>{' '}
            ao longo da minha trajetória como desenvolvedor.
          </p>
        </Header>

        <Content>
          <BlockContent>
            <h1>Career</h1>

            <Information>
              <h3>Bluestorm Software</h3>
              <p>Junior Front-End Developer</p>
              <p>Jan 2022 - Abr 2022</p>
            </Information>

            <Information>
              <h3>Bluestorm Studios</h3>
              <p>Full-Stack Developer</p>
              <p>Jan 2021 - Jan 2022</p>
            </Information>

            <Information>
              <h3>Massfar Realidade Virtual</h3>
              <p>AR/VR Developer - Web Mobile</p>
              <p>Sep 2019 - Jan 2021</p>
            </Information>
          </BlockContent>

          <div>
            <BlockContent>
              <h1>Education</h1>

              <Information>
                <h3>Barão de Mauá University</h3>
                <p>Game Design Developer</p>
                <p>Jun 2016 - Dec 2019</p>
              </Information>
            </BlockContent>

            <BlockContent>
              <h1>Courses</h1>

              <Information>
                <h3>Rocketseat</h3>
                <p>Ignite Bootcamp</p>
                <p>Jul 2022 - Ago 2022</p>
              </Information>

              <Information>
                <h3>CCAA Language School</h3>
                <p>English in Master 1 Level</p>
                <p>Jan 2012 - Dec 2018</p>
              </Information>
            </BlockContent>

            <BlockContent>
              <h1>Conferences</h1>

              <Information>
                <h3>Facebook ID8</h3>
                <p />
                <p>Oct - 2020</p>
              </Information>
            </BlockContent>
          </div>
        </Content>
      </Container>
    </Overpage>
  );
};
