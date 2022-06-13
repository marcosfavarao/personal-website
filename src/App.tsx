import { NavigationProvider } from './hooks/useNavigation';
import { Home, AboutMe } from './pages';

import { GlobalStyle } from './common/styles/globalStyles';

export const App = () => {
  return (
    <NavigationProvider>
      <Home />
      <AboutMe />
      <GlobalStyle />
    </NavigationProvider>
  );
};
