import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './common/styles/themeStyles';

import { NavigationProvider } from './hooks';
import { Home, AboutMe } from './pages';

import { GlobalStyle } from './common/styles/globalStyles';

export const App = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme.title === 'lightTheme' ? darkTheme : lightTheme,
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <NavigationProvider>
        <Home
          onChangeTheme={toggleTheme}
          onCheckTheme={theme.title !== 'lightTheme'}
        />
        <AboutMe />
        <GlobalStyle />
      </NavigationProvider>
    </ThemeProvider>
  );
};
