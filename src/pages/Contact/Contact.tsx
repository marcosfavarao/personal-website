import { useNavigation } from '../../hooks';
import { Overpage } from '../../components';

import { Container } from './contact.styles';

export const Contact = () => {
  const { toggleContactPage, setToggleContactPage } = useNavigation();

  return (
    <Overpage
      showPageContent={toggleContactPage}
      onClosePageContent={() => setToggleContactPage(false)}
    >
      <Container>
        <h1>Contact</h1>
        <p>My contact</p>
      </Container>
    </Overpage>
  );
};
