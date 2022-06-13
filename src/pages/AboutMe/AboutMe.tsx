import { useNavigation } from '../../hooks';
import { Overpage } from '../../components';

export const AboutMe = () => {
  const { toggleAboutMePage, setToggleAboutMePage } = useNavigation();

  return (
    <Overpage
      showPageContent={toggleAboutMePage}
      onClosePageContent={() => setToggleAboutMePage(false)}
      pageTitle="About Me"
    >
      <div />
    </Overpage>
  );
};
