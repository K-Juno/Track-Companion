import { useCallback, useEffect, useState } from 'react';

export default function useLocalStorage(key, initialState) {
  const [stateValue, setStateValue] = useState(initialState);

  const setStateAndUpdateLocalStorage = useCallback(
    (value) => {
      setStateValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    },
    [key]
  );

  useEffect(() => {
    const stored = window.localStorage.getItem(key);
    if (stored !== null) {
      setStateValue(JSON.parse(stored));
    }
  }, [key]);

  return [stateValue, setStateAndUpdateLocalStorage];
}
