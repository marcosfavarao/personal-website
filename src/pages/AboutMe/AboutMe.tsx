import { useNavigation } from '../../hooks';
import { Overpage } from '../../components';

import { Container, Content, Block, Header } from './aboutme.styles';

export const AboutMe = () => {
  const { toggleAboutMePage, setToggleAboutMePage } = useNavigation();

  return (
    <Overpage
      showPageContent={toggleAboutMePage}
      onClosePageContent={() => setToggleAboutMePage(false)}
      pageTitle="About Me"
    >
      <Container>
        <Header>
          <p>
            &apos;Hello World&apos;, meu nome é <b>Marcos Favarão</b>,
            desenvolvedor web apaixonado por tecnologia,{' '}
            <span>
              <a
                href="https://open.spotify.com/user/g55nb1mqoasclcvzgmqmys7o6"
                target="_blank"
                rel="noreferrer"
              >
                música
              </a>
            </span>{' '}
            e viajens. Possuo 26 anos de idade e atualmente moro na grande
            Ribeirão Preto, São Paulo.
          </p>
        </Header>
        <Content>
          <Block>
            <h2>● 2012</h2>
            <p>
              Foi onde tudo começou. Neste tempo, aprendia por conta sobre
              sistemas operacionais, softwares e tecnologias através de leituras
              e pesquisas.
            </p>
          </Block>

          <Block>
            <h2>● 2015</h2>
            <p>
              Desenvolvi meus 2 primeiros sites para 2 empresas do ramo textil.
              Desde então me dedico a entender os fundamentos e conceitos da
              programação e desenvolvimento.
            </p>
          </Block>

          <Block>
            <h2>● 2019</h2>
            <p>
              Finalmente formado em Game Design Developer. Também comecei minha
              carreira profissional como desenvolvedor, criando experiências e
              projetos destinado ao mercado de Realidade Virtual(VR) e
              Aumentada(AR).
            </p>
          </Block>

          <Block>
            <h2>● 2021</h2>
            <p>
              Em 2021 tive minha primeira oportunidade de trabalho como
              desenvolvedor web em uma multinacional, utilizando frameworks e
              tecnologias como{' '}
              <span>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  <b>React</b>
                </a>{' '}
              </span>
              e{' '}
              <span>
                <a
                  href="https://nodejs.org/en/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>NodeJS</b>
                </a>
              </span>
              . Além de contribuir com projetos internos da empresa, também
              desenvolvia interfaces para uma corporativa de saúde no exterior,
              bem como farmácias/planos de saúde em que a mesma licenciavae que
              utilizavam do nosso produto.
            </p>
          </Block>

          <Block>
            <h2>● 2022</h2>
            <p>Procurando novos desafios e oportunidades para crescimento...</p>
          </Block>
        </Content>
      </Container>
    </Overpage>
  );
};
