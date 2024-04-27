import {createContext} from 'react';

type AppNavigationContextType = {
  popupMenuVisible: boolean;
  setPopupMenuVisible: (visible: boolean) => void;
} | null;

export const AppNavigationContext =
  createContext<AppNavigationContextType>(null);
