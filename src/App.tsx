import { NavigationProvider } from './hooks/useNavigation';
import { Home, AboutMe, Contact, Projects, Experiences, Skills } from './pages';

import { GlobalStyle } from './common/styles/globalStyles';

export const App = () => {
  return (
    <NavigationProvider>
      <Home />
      <Contact />
      <Projects />
      <AboutMe />
      <Experiences />
      <Skills />
      <GlobalStyle />
    </NavigationProvider>
  );
};
