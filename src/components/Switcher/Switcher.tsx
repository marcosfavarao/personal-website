import { ComponentType, useState } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container, Toggler } from './switcher.styles';

type IconProps = {
  leftIcon: ComponentType<IconBaseProps>;
  rightIcon: ComponentType<IconBaseProps>;
};

interface SwitcherProps {
  icon?: ComponentType<IconBaseProps>;
  dynamicOnChangeIcon?: IconProps;
}

export const Switcher = ({
  icon: Icon,
  dynamicOnChangeIcon,
}: SwitcherProps) => {
  const [toggle, setToggle] = useState<boolean>(false);
  let Icons;

  if (Icon) {
    Icons = <Icon />;
  } else if (dynamicOnChangeIcon?.leftIcon || dynamicOnChangeIcon?.rightIcon) {
    const LeftIcon = dynamicOnChangeIcon?.leftIcon;
    const RightIcon = dynamicOnChangeIcon?.rightIcon;

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
