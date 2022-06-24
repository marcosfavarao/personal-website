import { useNavigation } from '../../hooks';
import { Overpage } from '../../components';

import { Container, Content, Block, Header } from './about.styles';

export const About = () => {
  const { toggleAboutPage, setToggleAboutPage } = useNavigation();

  return (
    <Overpage
      showPageContent={toggleAboutPage}
      onClosePageContent={() => setToggleAboutPage(false)}
      pageTitle="About"
    >
      <Container>
        <Header>
          <p>
            &apos;Hello World&apos;, my name is <b>Marcos Favarão</b>, a
            software engineer passionate about technology,{' '}
            <span>
              <a
                href="https://open.spotify.com/user/g55nb1mqoasclcvzgmqmys7o6"
                target="_blank"
                rel="noreferrer"
              >
                music
              </a>
            </span>{' '}
            and travel. I am 26 years old and currently live in Ribeirão Preto,
            São Paulo.
          </p>
        </Header>
        <Content>
          <Block>
            <h2>● 2012</h2>
            <p>
              It was where all started. During this time, I have learned by
              myself about operating systems, software and technologies through
              reading and researchs.
            </p>
          </Block>

          <Block>
            <h2>● 2015</h2>
            <p>
              Developed my first 2 websites for 2 different companies. Since
              then, I have been learning all the fundamentals and concepts of
              programming and development on my own.
            </p>
          </Block>

          <Block>
            <h2>● 2019</h2>
            <p>
              Finally graduated in Game Design Developer. I also started my
              professional career as a developer, creating experiences and
              projects for the Virtual Reality (VR) and Augmented Reality (AR)
              market.
            </p>
          </Block>

          <Block>
            <h2>● 2021</h2>
            <p>
              In 2021, I had my first opportunity to work as a web developer in
              a multinational, using frameworks and technologies like{' '}
              <span>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  <b>React</b>
                </a>{' '}
              </span>{' '}
              and{' '}
              <span>
                <a
                  href="https://nodejs.org/en/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>NodeJS</b>
                </a>
              </span>
              . During this time, he contributed to internal projects and also
              developed interfaces for a healthcare company abroad, as well as
              pharmacies/health plans in which the company licensed and used our
              product.
            </p>
          </Block>

          <Block>
            <h2>● 2022</h2>
            <p>In search of more challenges and opportunities...</p>
          </Block>
        </Content>
      </Container>
    </Overpage>
  );
};
