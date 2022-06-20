import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './common/styles/theme';
import { NavigationProvider } from './hooks/useNavigation';

import { Home, AboutMe } from './pages';

import { GlobalStyle } from './common/styles/globalStyles';

export const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <NavigationProvider>
        <Home />
        <AboutMe />
        <GlobalStyle />
      </NavigationProvider>
    </ThemeProvider>
  );
};
