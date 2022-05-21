import create from 'zustand';
import navbarStore from './ui/dashboard/navbarStore';

type StateFromFunctions<T extends [...any]> = T extends [infer F, ...(infer R)]
  // eslint-disable-next-line no-unused-vars
  ? F extends (...args: any) => object
    ? StateFromFunctions<R> & ReturnType<F>
    : unknown
  : unknown;

type State = StateFromFunctions<[
    typeof navbarStore
]>;

const useStore = create<State>((set, get) => ({
  ...navbarStore(set, get),
}));

export default useStore;
