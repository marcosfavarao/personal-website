import { useNavigation } from '../../hooks';
import { Overpage } from '../../components';

import {
  icon01Img,
  icon02Img,
  icon03Img,
  icon04Img,
  icon05Img,
  icon06Img,
  icon07Img,
  icon08Img,
  icon09Img,
  icon10Img,
  icon11Img,
  icon12Img,
  icon13Img,
  icon14Img,
  icon15Img,
  icon16Img,
  icon17Img,
  icon18Img,
  icon19Img,
  icon20Img,
} from '../../common/assets/images';
import { Container, Header, Content, Sticker } from './skills.styles';

export const Skills = () => {
  const { toggleSkillsPage, setToggleSkillsPage } = useNavigation();

  return (
    <Overpage
      showPageContent={toggleSkillsPage}
      onClosePageContent={() => setToggleSkillsPage(false)}
      pageTitle="Skills"
    >
      <Container>
        <Header>
          <p>
            During my career, I collaborated with several projects using the
            following technologies showed below.
          </p>
        </Header>

        <Content>
          <Sticker>
            <img src={icon01Img} alt="Icon 01" />
            <span>Reactjs</span>
          </Sticker>

          <Sticker>
            <img src={icon02Img} alt="Icon 02" />
            <span>Nodejs</span>
          </Sticker>

          <Sticker>
            <img src={icon03Img} alt="Icon 03" />
            <span>Javascript</span>
          </Sticker>

          <Sticker>
            <img src={icon04Img} alt="Icon 04" />
            <span>Typescript</span>
          </Sticker>

          <Sticker>
            <img src={icon05Img} alt="Icon 05" />
            <span>HTML</span>
          </Sticker>

          <Sticker>
            <img src={icon06Img} alt="Icon 06" />
            <span>CSS</span>
          </Sticker>

          <Sticker>
            <img src={icon07Img} alt="Icon 07" />
            <span>Next</span>
          </Sticker>

          <Sticker>
            <img src={icon08Img} alt="Icon 08" />
            <span>SASS</span>
          </Sticker>

          <Sticker>
            <img src={icon09Img} alt="Icon 09" />
            <span>Styled Components</span>
          </Sticker>

          <Sticker>
            <img src={icon10Img} alt="Icon 10" />
            <span>Polished</span>
          </Sticker>

          <Sticker>
            <img src={icon11Img} alt="Icon 11" />
            <span>Redux</span>
          </Sticker>

          <Sticker>
            <img src={icon12Img} alt="Icon 12" />
            <span>JQuery</span>
          </Sticker>

          <Sticker>
            <img src={icon13Img} alt="Icon 13" />
            <span>Jest</span>
          </Sticker>

          <Sticker>
            <img src={icon14Img} alt="Icon 14" />
            <span>Git</span>
          </Sticker>

          <Sticker>
            <img src={icon15Img} alt="Icon 15" />
            <span>AWS</span>
          </Sticker>

          <Sticker>
            <img src={icon16Img} alt="Icon 16" />
            <span>Editor Config</span>
          </Sticker>

          <Sticker>
            <img src={icon17Img} alt="Icon 17" />
            <span>Prettier</span>
          </Sticker>

          <Sticker>
            <img src={icon18Img} alt="Icon 18" />
            <span>ESLint</span>
          </Sticker>

          <Sticker>
            <img src={icon19Img} alt="Icon 19" />
            <span>Figma</span>
          </Sticker>

          <Sticker>
            <img src={icon20Img} alt="Icon 20" />
            <span>Photoshop</span>
          </Sticker>
        </Content>
      </Container>
    </Overpage>
  );
};
