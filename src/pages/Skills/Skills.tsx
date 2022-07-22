import { useNavigation } from '../../hooks';
import { Overpage } from '../../components';
import { data } from '../../data';

import { Container, Header, Content, Sticker } from './skills.styles';

export const Skills = () => {
  const { skills } = data;
  const { toggleSkillsPage, setToggleSkillsPage } = useNavigation();

  return (
    <Overpage
      showPageContent={toggleSkillsPage}
      onClosePageContent={() => setToggleSkillsPage(false)}
      pageTitle="Skills"
    >
      <Container>
        <Header>
          <p>
            During my career, I collaborated with several projects using the
            following technologies.
          </p>
        </Header>

        <Content>
          {skills.map((item) => (
            <Sticker key={item.id}>
              <img src={item.icon} alt={`Item ${item.id}`} />
              <span>{item.name}</span>
            </Sticker>
          ))}
        </Content>
      </Container>
    </Overpage>
  );
};
