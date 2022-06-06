import { useState } from 'react';

import { FaSun } from 'react-icons/fa';
import { BsMoonStarsFill } from 'react-icons/bs';

import { Container, RoundedButton } from './switch.styles';

export const Switch = () => {
  const [toggleTheme, setToggleTheme] = useState<boolean>(false);

  return (
    <Container>
      <RoundedButton
        type="button"
        toggleSwitcher={toggleTheme}
        onClick={() => setToggleTheme((currentValue) => !currentValue)}
      >
        {toggleTheme ? <BsMoonStarsFill /> : <FaSun />}
      </RoundedButton>
    </Container>
  );
};
