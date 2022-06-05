import { useNavigation } from '../../hooks/useNavigation';

import profileImg from '../../common/assets/images/profile-image.png';

import { Container, Profile, Navbar, Button } from './home.styles';

// const NavbarLinks = () => {
//   return (
//     <>
//       <Button type="button">Contact</Button>
//       <Button type="button">Projects</Button>
//       <Button type="button">About Me</Button>
//       <Button type="button">Experiences</Button>
//       <Button type="button">Skills</Button>
//     </>
//   );
// };

export const Home = () => {
  const { setToggleAboutMePage } = useNavigation();

  return (
    <Container>
      <Profile>
        <img src={profileImg} alt="profile" />

        <h1>Marcos A. L. Favarão</h1>
        <h2>Web Front-End Developer</h2>
      </Profile>

      <Navbar>
        <Button type="button">Contact</Button>
        <Button type="button">Projects</Button>
        <Button type="button" onClick={() => setToggleAboutMePage(true)}>
          About Me
        </Button>
        <Button type="button">Experiences</Button>
        <Button type="button">Skills</Button>
      </Navbar>
    </Container>
  );
};
