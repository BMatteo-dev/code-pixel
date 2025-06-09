import { createContext } from 'react';

export const AuthContext = createContext({
  isLogin: false,
  setIsLogin: () => {}, // valeur par défaut (facultative mais utile pour le typage)
});
