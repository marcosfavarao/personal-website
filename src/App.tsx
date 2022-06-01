import { Home } from './pages';
import { Overpage } from './components';

import { GlobalStyle } from './common/styles/globalStyles';

export const App = () => {
  return (
    <>
      <Home />
      <Overpage />
      <GlobalStyle />
    </>
  );
};
