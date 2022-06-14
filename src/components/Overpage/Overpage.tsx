import { ComponentType, ReactNode } from 'react';
import { IconBaseProps } from 'react-icons';
import { IoIosArrowDown } from 'react-icons/io';

import { Container, Content, Header } from './overpage.styles';

interface OverpageProps {
  children: ReactNode;
  showPageContent: boolean;
  pageTitle?: string;
  icon?: ComponentType<IconBaseProps>;
  iconSize?: number;
  onClosePageContent: () => void;
}

export const Overpage = ({
  children,
  showPageContent,
  pageTitle,
  icon: Icon,
  iconSize = 50,
  onClosePageContent,
}: OverpageProps) => {
  return (
    <Container showPageContent={showPageContent}>
      <Content>
        <Header iconSize={iconSize}>
          {Icon ? (
            <Icon onClick={onClosePageContent} />
          ) : (
            <IoIosArrowDown onClick={onClosePageContent} />
          )}
          {pageTitle && <h1>{pageTitle}</h1>}
        </Header>
        {children}
      </Content>
    </Container>
  );
};
