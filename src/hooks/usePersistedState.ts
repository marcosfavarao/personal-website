import { useEffect, useState, Dispatch, SetStateAction } from 'react';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export const usePersistedState = <T>(
  storageKey: string,
  storageValue: T,
): Response<T> => {
  const [state, setState] = useState(() => {
    const storageItem = localStorage.getItem(storageKey);

    if (storageItem !== null && storageItem) {
      return JSON.parse(storageItem);
    }

    return storageValue;
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(state));
  }, [state, storageKey]);

  return [state, setState];
};
