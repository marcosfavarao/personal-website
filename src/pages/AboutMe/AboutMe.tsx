import { useNavigation } from '../../hooks';
import { Overpage } from '../../components';

import { Container } from './aboutme.styles';

export const AboutMe = () => {
  const { toggleAboutMePage, setToggleAboutMePage } = useNavigation();

  return (
    <Overpage
      showPageContent={toggleAboutMePage}
      onClosePageContent={() => setToggleAboutMePage(false)}
    >
      <Container>
        <h1>About Me</h1>
        <p>About Me</p>
      </Container>
    </Overpage>
  );
};
