import { useEffect, useRef } from 'react';

export const usePrevious = <T extends any>(value: T): T | any => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};
