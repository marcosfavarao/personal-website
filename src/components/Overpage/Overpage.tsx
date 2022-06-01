import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import { Container, ContentPage } from './overpage.styles';

interface OverpageProps {
  showPageContent: boolean;
  hidePageContent: () => void;
}

export const Overpage = () => {
  const [showPageContent, setShowPageContent] = useState(false); // ! Substituir por valores vindos de props externas

  return (
    <Container>
      <ContentPage showPageContent={showPageContent}>
        <IoIosArrowDown onClick={() => setShowPageContent(false)} />
      </ContentPage>
    </Container>
  );
};
