import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaStackOverflow,
} from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

import { useNavigation } from '../../hooks';
import { Overpage } from '../../components';

import { Container, Header, SocialBar, Social } from './contact.styles';

export const Contact = () => {
  const { toggleContactPage, setToggleContactPage } = useNavigation();

  return (
    <Overpage
      showPageContent={toggleContactPage}
      onClosePageContent={() => setToggleContactPage(false)}
      pageTitle="Contact"
    >
      <Container>
        <Header>
          <p>You can contact me on the following social networks below.</p>
        </Header>

        <SocialBar>
          <p>Follow me:</p>
          <Social>
            <a
              href="https://github.com/marcosfavarao"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/devfavarao/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://twitter.com/_marcosfavarao"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>

            <a
              href="https://pt.stackoverflow.com/users/268976/marcos-favar%c3%a3o"
              target="_blank"
              rel="noreferrer"
            >
              <FaStackOverflow />
            </a>

            <a
              href="mailto: marcosfavarao@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <IoIosMail />
            </a>
          </Social>
        </SocialBar>
      </Container>
    </Overpage>
  );
};
