import create from 'zustand';

interface ISideNavState {
  isOpen: boolean;
  toggleSideNav: (event: any) => void;
}

const useSideNavStore = create<ISideNavState>(set => ({
  isOpen: false,
  toggleSideNav: () =>
    set((state: { isOpen: boolean }) => ({ isOpen: !state.isOpen })),
}));

export default useSideNavStore;
