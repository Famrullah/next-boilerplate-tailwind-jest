import { useEffect, useRef } from 'react';

const usePrevious = <T extends any>(value: T): T | any => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export default usePrevious;
