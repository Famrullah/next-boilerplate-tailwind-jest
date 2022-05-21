import { GetState, SetState } from 'zustand';

export interface INavbar {
  initialState: boolean;
}

const createFishSlice = (set: SetState<INavbar>, get: GetState<INavbar>) => ({
  initialState: false,
  setIsOpen: () => {
    set((prev) => ({ initialState: !prev.initialState }));
  },
  getData: () => get().initialState,
});

export default createFishSlice;
