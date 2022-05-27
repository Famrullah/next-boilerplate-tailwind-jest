import { GetState, SetState } from 'zustand';

export interface INavbar {
  initialState: boolean;
}

const NavbarStore = (set: SetState<INavbar>, get: GetState<INavbar>) => ({
  initialState: true,
  setIsOpen: () => {
    set((prev) => ({ initialState: !prev.initialState }));
  },
  getData: () => get().initialState,
});

export default NavbarStore;
