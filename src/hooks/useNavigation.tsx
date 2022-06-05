import {
  createContext,
  useMemo,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useContext,
} from 'react';

interface NavigationProviderProps {
  children: ReactNode;
}

interface NavigationState {
  toggleContactPage: boolean;
  toggleProjectsPage: boolean;
  toggleAboutMePage: boolean;
  toggleExperiencesPage: boolean;
  toggleSkillsPage: boolean;
  setToggleContactPage: Dispatch<SetStateAction<boolean>>;
  setToggleProjectsPage: Dispatch<SetStateAction<boolean>>;
  setToggleAboutMePage: Dispatch<SetStateAction<boolean>>;
  setToggleExperiencesPage: Dispatch<SetStateAction<boolean>>;
  setToggleSkillsPage: Dispatch<SetStateAction<boolean>>;
}

const DEFAULT_VALUE = {
  toggleContactPage: false,
  toggleProjectsPage: false,
  toggleAboutMePage: false,
  toggleExperiencesPage: false,
  toggleSkillsPage: false,
  setToggleContactPage: () => ({}),
  setToggleProjectsPage: () => ({}),
  setToggleAboutMePage: () => ({}),
  setToggleExperiencesPage: () => ({}),
  setToggleSkillsPage: () => ({}),
};

const NavigationContext = createContext<NavigationState>(DEFAULT_VALUE);

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const [toggleContactPage, setToggleContactPage] = useState<boolean>(
    DEFAULT_VALUE.toggleContactPage,
  );
  const [toggleProjectsPage, setToggleProjectsPage] = useState<boolean>(
    DEFAULT_VALUE.toggleProjectsPage,
  );
  const [toggleAboutMePage, setToggleAboutMePage] = useState<boolean>(
    DEFAULT_VALUE.toggleAboutMePage,
  );
  const [toggleExperiencesPage, setToggleExperiencesPage] = useState<boolean>(
    DEFAULT_VALUE.toggleExperiencesPage,
  );
  const [toggleSkillsPage, setToggleSkillsPage] = useState<boolean>(
    DEFAULT_VALUE.toggleSkillsPage,
  );

  const provider = useMemo(
    () => ({
      toggleContactPage,
      toggleProjectsPage,
      toggleAboutMePage,
      toggleExperiencesPage,
      toggleSkillsPage,
      setToggleContactPage,
      setToggleProjectsPage,
      setToggleAboutMePage,
      setToggleExperiencesPage,
      setToggleSkillsPage,
    }),
    [
      toggleAboutMePage,
      toggleContactPage,
      toggleExperiencesPage,
      toggleProjectsPage,
      toggleSkillsPage,
    ],
  );

  return (
    <NavigationContext.Provider value={provider}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);

  return context;
};
