import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

import { darkTheme, lightTheme } from '../common/styles/themeStyles';

type ThemeType = {
  title: string;

  colors: {
    background: string;
    text: string;
    primary: string;
    secondary: string;
  };
};

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeState {
  theme: ThemeType;
}

const DEFAULT_VALUE = {
  theme: darkTheme,
};

const ThemeContext = createContext<ThemeState>(DEFAULT_VALUE);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>(darkTheme);

  const provider = useMemo(
    () => ({
      theme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={provider}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  return context;
};
