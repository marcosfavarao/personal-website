import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaStackOverflow,
  FaWhatsapp,
} from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

import { useNavigation } from '../../hooks';
import { Overpage } from '../../components';

import { Container, Header, Form, Content, Social } from './contact.styles';

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
          <p>Você pode me contactar nas seguintes redes sociais abaixo.</p>
        </Header>

        {/* <Form>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Message..." />
          <button type="submit">Submit</button>
        </Form> */}

        <Content>
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
        </Content>
      </Container>
    </Overpage>
  );
};
