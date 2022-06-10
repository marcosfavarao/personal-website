import { ComponentType, useState } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container, Toggler } from './switcher.styles';

type IconProps = {
  leftIcon: ComponentType<IconBaseProps>;
  rightIcon: ComponentType<IconBaseProps>;
};

interface SwitcherProps {
  icon?: ComponentType<IconBaseProps>;
  dinamicOnChangeIcon?: IconProps;
}

export const Switcher = ({
  icon: Icon,
  dinamicOnChangeIcon,
}: SwitcherProps) => {
  const [toggle, setToggle] = useState<boolean>(false);
  let Icons;

  if (Icon) {
    Icons = <Icon />;
  } else if (dinamicOnChangeIcon?.leftIcon || dinamicOnChangeIcon?.rightIcon) {
    const LeftIcon = dinamicOnChangeIcon?.leftIcon;
    const RightIcon = dinamicOnChangeIcon?.rightIcon;

    Icons = !toggle ? <LeftIcon /> : <RightIcon />;
  }

  return (
    <Container>
      <Toggler
        type="button"
        onActivate={toggle}
        onClick={() => setToggle((current) => !current)}
      >
        {Icons}
        {/* {!toggle ? <FaSun /> : <RiMoonClearFill />} */}
      </Toggler>
    </Container>
  );
};
