import { useCallback } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { darkTheme, lightTheme } from './common/styles/themeStyles';

import { NavigationProvider, usePersistedState } from './hooks';
import { Home, About, Contact, Projects, Experiences, Skills } from './pages';

import { GlobalStyle } from './common/styles/globalStyles';

export const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    'theme',
    lightTheme,
  );

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) =>
      currentTheme.title !== 'lightTheme' ? lightTheme : darkTheme,
    );
  }, [setTheme]);

  return (
    <ThemeProvider theme={theme}>
      <NavigationProvider>
        <Home
          onChangeTheme={toggleTheme}
          onCheckTheme={theme.title !== 'lightTheme'}
        />
        <Contact />
        <Projects />
        <About />
        <Experiences />
        <Skills />
        <GlobalStyle />
      </NavigationProvider>
    </ThemeProvider>
  );
};
