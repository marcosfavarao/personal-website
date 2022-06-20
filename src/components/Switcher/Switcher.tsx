import { ComponentType, useEffect, useState } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container, Toggler } from './switcher.styles';

interface SwitcherProps {
  onCheck: boolean;
  icon?: ComponentType<IconBaseProps>;
  checkedIcon?: ComponentType<IconBaseProps>;
  uncheckedIcon?: ComponentType<IconBaseProps>;
  onChange: () => void;
}

export const Switcher = ({
  onCheck,
  icon: Icon,
  checkedIcon: CheckedIcon,
  uncheckedIcon: UncheckedIcon,
  onChange,
}: SwitcherProps) => {
  const [toggle, setToggle] = useState<boolean>(false);
  let SVG;

  if (Icon != null && Icon) {
    SVG = <Icon />;
  } else {
    if (UncheckedIcon != null && UncheckedIcon && !toggle) {
      SVG = <UncheckedIcon />;
    }
    if (CheckedIcon != null && CheckedIcon && toggle) {
      SVG = <CheckedIcon />;
    }
  }

  useEffect(() => {
    setToggle((current) => !current);
  }, [onCheck]);

  return (
    <Container>
      <Toggler type="button" onCheck={onCheck} onClick={onChange}>
        {SVG}
      </Toggler>
    </Container>
  );
};
