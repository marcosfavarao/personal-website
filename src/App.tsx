import { useState } from 'react';

import { Home, AboutMe } from './pages';

import { GlobalStyle } from './common/styles/globalStyles';

export const App = () => {
  const [isAboutMePageOpen, setIsAboutMePageOpen] = useState(false);

  const handleOpenAboutMePage = () => setIsAboutMePageOpen(true);

  const handleClosePages = () => setIsAboutMePageOpen(false);

  return (
    <>
      <Home onOpenAboutMePage={handleOpenAboutMePage} />
      <AboutMe openPage={isAboutMePageOpen} onClosePage={handleClosePages} />
      <GlobalStyle />
    </>
  );
};
