import { useState } from 'react';
import { FaSun } from 'react-icons/fa';
import { RiMoonClearFill } from 'react-icons/ri';

import { useNavigation } from '../../hooks';
import { Switcher } from '../../components';

import profileImg from '../../common/assets/images/profile-image.png';
import {
  Container,
  Content,
  Profile,
  Navbar,
  Button,
  MobileMenu,
  MobileNavbar,
  MobileMenuIcon,
  MobileMenuArrowIcon,
} from './home.styles';

interface HomeProps {
  onCheckTheme: boolean;
  onChangeTheme: () => void;
}

const NavbarLinks = () => {
  const {
    setToggleContactPage,
    setToggleProjectsPage,
    setToggleAboutMePage,
    setToggleExperiencesPage,
    setToggleSkillsPage,
  } = useNavigation();

  return (
    <>
      <Button type="button" onClick={() => setToggleContactPage(true)}>
        Contact
      </Button>
      <Button type="button" onClick={() => setToggleProjectsPage(true)}>
        Projects
      </Button>
      <Button type="button" onClick={() => setToggleAboutMePage(true)}>
        About Me
      </Button>
      <Button type="button" onClick={() => setToggleExperiencesPage(true)}>
        Experiences
      </Button>
      <Button type="button" onClick={() => setToggleSkillsPage(true)}>
        Skills
      </Button>
    </>
  );
};

export const Home = ({ onCheckTheme, onChangeTheme }: HomeProps) => {
  const {
    setToggleContactPage,
    setToggleProjectsPage,
    setToggleAboutMePage,
    setToggleExperiencesPage,
    setToggleSkillsPage,
    closePages,
  } = useNavigation();
  const [toggleMobileMenu, setToggleMobileMenu] = useState<boolean>(false);

  return (
    <Container>
      <MobileMenuIcon onClick={() => setToggleMobileMenu(true)} />

      <Switcher
        onCheck={onCheckTheme}
        onChange={onChangeTheme}
        checkedIcon={RiMoonClearFill}
        uncheckedIcon={FaSun}
      />

      <Content>
        <Profile>
          <img src={profileImg} alt="profile" />

          <h1>Marcos A. L. Favarão</h1>
          <h2>Web Front-End Developer</h2>
        </Profile>

        <Navbar>
          <NavbarLinks />
        </Navbar>
      </Content>

      <MobileMenu toggleMobileMenu={toggleMobileMenu}>
        <MobileNavbar>
          <button
            type="button"
            onClick={() => {
              setToggleMobileMenu(false);
              closePages();
            }}
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => {
              closePages();
              setToggleMobileMenu(false);
              setToggleAboutMePage(true);
            }}
          >
            About Me
          </button>
          <button
            type="button"
            onClick={() => {
              closePages();
              setToggleMobileMenu(false);
              setToggleProjectsPage(true);
            }}
          >
            Projects
          </button>

          <button
            type="button"
            onClick={() => {
              closePages();
              setToggleMobileMenu(false);
              setToggleExperiencesPage(true);
            }}
          >
            Experiences
          </button>

          <button
            type="button"
            onClick={() => {
              closePages();
              setToggleMobileMenu(false);
              setToggleSkillsPage(true);
            }}
          >
            Skills
          </button>

          <button
            type="button"
            onClick={() => {
              closePages();
              setToggleMobileMenu(false);
              setToggleContactPage(true);
            }}
          >
            Contact
          </button>
        </MobileNavbar>

        <MobileMenuArrowIcon onClick={() => setToggleMobileMenu(false)} />
      </MobileMenu>
    </Container>
  );
};
