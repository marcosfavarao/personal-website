import {
  ReactNode,
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo,
} from 'react';

interface NavigationProviderProps {
  children: ReactNode;
}

interface NavigationState {
  onAnyPageOpen: boolean;
  toggleContactPage: boolean;
  toggleProjectsPage: boolean;
  toggleAboutPage: boolean;
  toggleExperiencesPage: boolean;
  toggleSkillsPage: boolean;
  setToggleContactPage: Dispatch<SetStateAction<boolean>>;
  setToggleProjectsPage: Dispatch<SetStateAction<boolean>>;
  setToggleAboutPage: Dispatch<SetStateAction<boolean>>;
  setToggleExperiencesPage: Dispatch<SetStateAction<boolean>>;
  setToggleSkillsPage: Dispatch<SetStateAction<boolean>>;
  closePages: () => void;
}

const DEFAULT_VALUE = {
  onAnyPageOpen: false,
  toggleContactPage: false,
  toggleProjectsPage: false,
  toggleAboutPage: false,
  toggleExperiencesPage: false,
  toggleSkillsPage: false,
  setToggleContactPage: () => ({}),
  setToggleProjectsPage: () => ({}),
  setToggleAboutPage: () => ({}),
  setToggleExperiencesPage: () => ({}),
  setToggleSkillsPage: () => ({}),
  closePages: () => ({}),
};

const NavigationContext = createContext<NavigationState>(DEFAULT_VALUE);

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const [onAnyPageOpen, setOnAnyPageOpen] = useState<boolean>(
    DEFAULT_VALUE.onAnyPageOpen,
  );
  const [toggleContactPage, setToggleContactPage] = useState<boolean>(
    DEFAULT_VALUE.toggleContactPage,
  );
  const [toggleProjectsPage, setToggleProjectsPage] = useState<boolean>(
    DEFAULT_VALUE.toggleProjectsPage,
  );
  const [toggleAboutPage, setToggleAboutPage] = useState<boolean>(
    DEFAULT_VALUE.toggleAboutPage,
  );
  const [toggleExperiencesPage, setToggleExperiencesPage] = useState<boolean>(
    DEFAULT_VALUE.toggleExperiencesPage,
  );
  const [toggleSkillsPage, setToggleSkillsPage] = useState<boolean>(
    DEFAULT_VALUE.toggleSkillsPage,
  );

  const closePages = () => {
    setToggleContactPage(false);
    setToggleProjectsPage(false);
    setToggleAboutPage(false);
    setToggleExperiencesPage(false);
    setToggleSkillsPage(false);
  };

  useEffect(() => {
    setOnAnyPageOpen((callback) => !callback);
  }, [
    toggleContactPage,
    toggleProjectsPage,
    toggleAboutPage,
    toggleExperiencesPage,
    toggleSkillsPage,
  ]);

  const provider = useMemo(
    () => ({
      onAnyPageOpen,
      toggleContactPage,
      toggleProjectsPage,
      toggleAboutPage,
      toggleExperiencesPage,
      toggleSkillsPage,
      setToggleContactPage,
      setToggleProjectsPage,
      setToggleAboutPage,
      setToggleExperiencesPage,
      setToggleSkillsPage,
      closePages,
    }),
    [
      onAnyPageOpen,
      toggleAboutPage,
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
