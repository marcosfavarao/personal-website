import { useNavigation } from '../../hooks/useNavigation';
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
        AboutMe
        <h1>About</h1>
      </Container>
    </Overpage>
  );
};
