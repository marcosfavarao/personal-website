import { useNavigation } from '../../hooks';
import { Overpage } from '../../components';

import { Container } from './skills.styles';

export const Skills = () => {
  const { toggleSkillsPage, setToggleSkillsPage } = useNavigation();

  return (
    <Overpage
      showPageContent={toggleSkillsPage}
      onClosePageContent={() => setToggleSkillsPage(false)}
    >
      <Container>
        <h1>Skills</h1>
        <p>My Skills</p>
      </Container>
    </Overpage>
  );
};
