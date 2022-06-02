import { ReactNode } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import { Container, ContentPage } from './overpage.styles';

interface OverpageProps {
  children: ReactNode;
  showPageContent: boolean;
  onClosePageContent: () => void;
}

export const Overpage = ({
  children,
  showPageContent,
  onClosePageContent,
}: OverpageProps) => {
  return (
    <Container>
      <ContentPage showPageContent={showPageContent}>
        <IoIosArrowDown onClick={onClosePageContent} />
        {children}
      </ContentPage>
    </Container>
  );
};
