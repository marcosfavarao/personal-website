import { useState } from 'react';
import { FaSun } from 'react-icons/fa';
import { RiMoonClearFill } from 'react-icons/ri';

import { useNavigation } from '../../hooks';
import { Switcher } from '../../components';

import {
  Container,
  Content,
  Profile,
  Navbar,
  NavbarButton,
  MobileMenu,
  MobileNavbar,
  MobileNavbarButton,
  MobileMenuHomeIcon,
  MobileMenuArrowIcon,
} from './home.styles';

interface HomeProps {
  onCheckTheme: boolean;
  onChangeTheme: () => void;
}

export const Home = ({ onCheckTheme, onChangeTheme }: HomeProps) => {
  const {
    setToggleContactPage,
    setToggleProjectsPage,
    setToggleAboutPage,
    setToggleExperiencesPage,
    setToggleSkillsPage,
    closePages,
  } = useNavigation();
  const [toggleMobileMenu, setToggleMobileMenu] = useState<boolean>(false);

  return (
    <Container>
      <MobileMenuHomeIcon
        onClick={() => setToggleMobileMenu(true)}
        isMobileMenuOpen={toggleMobileMenu}
      />

      <Switcher
        onCheck={onCheckTheme}
        onChange={onChangeTheme}
        checkedIcon={RiMoonClearFill}
        uncheckedIcon={FaSun}
      />

      <Content>
        <Profile>
          <img
            src="https://ik.imagekit.io/marcosfavarao/dashboard/personal-website/profile-picture_IwcbyrGSSu.png?updatedAt=1685316192112"
            alt="profile"
          />

          <h1>Marcos A. L. Favarão</h1>
          <h2>Sênior Frontend Developer</h2>
        </Profile>

        <Navbar>
          <NavbarButton
            type="button"
            onClick={() => setToggleContactPage(true)}
          >
            Contact
          </NavbarButton>

          <NavbarButton
            type="button"
            onClick={() => setToggleProjectsPage(true)}
          >
            Projects
          </NavbarButton>

          <NavbarButton type="button" onClick={() => setToggleAboutPage(true)}>
            About
          </NavbarButton>

          <NavbarButton
            type="button"
            onClick={() => setToggleExperiencesPage(true)}
          >
            Experiences
          </NavbarButton>

          <NavbarButton type="button" onClick={() => setToggleSkillsPage(true)}>
            Skills
          </NavbarButton>
        </Navbar>
      </Content>

      <MobileMenu toggleMobileMenu={toggleMobileMenu}>
        <MobileNavbar>
          <MobileNavbarButton
            type="button"
            onClick={() => {
              setToggleMobileMenu(false);
              closePages();
            }}
          >
            Home
          </MobileNavbarButton>

          <MobileNavbarButton
            type="button"
            onClick={() => {
              closePages();
              setToggleMobileMenu(false);
              setToggleAboutPage(true);
            }}
          >
            About Me
          </MobileNavbarButton>

          <MobileNavbarButton
            type="button"
            onClick={() => {
              closePages();
              setToggleMobileMenu(false);
              setToggleProjectsPage(true);
            }}
          >
            Projects
          </MobileNavbarButton>

          <MobileNavbarButton
            type="button"
            onClick={() => {
              closePages();
              setToggleMobileMenu(false);
              setToggleExperiencesPage(true);
            }}
          >
            Experiences
          </MobileNavbarButton>

          <MobileNavbarButton
            type="button"
            onClick={() => {
              closePages();
              setToggleMobileMenu(false);
              setToggleSkillsPage(true);
            }}
          >
            Skills
          </MobileNavbarButton>

          <MobileNavbarButton
            type="button"
            onClick={() => {
              closePages();
              setToggleMobileMenu(false);
              setToggleContactPage(true);
            }}
          >
            Contact
          </MobileNavbarButton>
        </MobileNavbar>

        <MobileMenuArrowIcon onClick={() => setToggleMobileMenu(false)} />
      </MobileMenu>
    </Container>
  );
};
