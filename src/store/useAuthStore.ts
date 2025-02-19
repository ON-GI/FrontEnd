import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserRole = 'ROLE_CAREGIVER' | 'ROLE_CENTER';

interface AuthStore {
  isLoggedIn: UserRole | null;
  login: (role: UserRole) => void;
  logout: () => void;
}

const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      isLoggedIn: null,
      login: (role: UserRole) => set({ isLoggedIn: role }),
      logout: () =>
        set({
          isLoggedIn: null,
        }),
    }),
    {
      name: 'userStorage',
    },
  ),
  //)
);
export default useAuthStore;
