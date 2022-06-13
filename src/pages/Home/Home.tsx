import { FaSun } from 'react-icons/fa';
import { RiMoonClearFill } from 'react-icons/ri';

import { useNavigation } from '../../hooks';
import { Switcher } from '../../components';

import profileImg from '../../common/assets/images/profile-image.png';
import { Container, Profile, Navbar, Button } from './home.styles';

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

export const Home = () => {
  return (
    <Container>
      <Switcher
        dynamicOnChangeIcon={{ leftIcon: FaSun, rightIcon: RiMoonClearFill }}
      />

      <Profile>
        <img src={profileImg} alt="profile" />

        <h1>Marcos A. L. Favarão</h1>
        <h2>Web Front-End Developer</h2>
      </Profile>

      <Navbar>
        <NavbarLinks />
      </Navbar>
    </Container>
  );
};
