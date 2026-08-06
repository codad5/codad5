'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface NavMenuContextType {
  open: boolean;
  toggle: () => void;
  close: () => void;
}

const NavMenuContext = createContext<NavMenuContextType | undefined>(undefined);

export function NavMenuProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <NavMenuContext.Provider
      value={{ open, toggle: () => setOpen((v) => !v), close: () => setOpen(false) }}
    >
      {children}
    </NavMenuContext.Provider>
  );
}

export function useNavMenu() {
  const ctx = useContext(NavMenuContext);
  if (!ctx) throw new Error('useNavMenu must be used within NavMenuProvider');
  return ctx;
}
