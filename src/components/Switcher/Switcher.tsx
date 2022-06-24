import { ComponentType, useContext } from 'react';
import { IconBaseProps } from 'react-icons';
import { ThemeContext } from 'styled-components';

import { Container, Toggler } from './switcher.styles';

interface SwitcherProps {
  onCheck: boolean;
  checkedIcon?: ComponentType<IconBaseProps>;
  uncheckedIcon?: ComponentType<IconBaseProps>;
  onChange: () => void;
}

export const Switcher = ({
  onCheck,
  checkedIcon: CheckedIcon,
  uncheckedIcon: UncheckedIcon,
  onChange,
}: SwitcherProps) => {
  const { title } = useContext(ThemeContext);

  return (
    <Container>
      <Toggler type="button" onCheck={onCheck} onClick={onChange}>
        {UncheckedIcon && title === 'lightTheme' && <UncheckedIcon />}
        {CheckedIcon && title !== 'lightTheme' && <CheckedIcon />}
      </Toggler>
    </Container>
  );
};
