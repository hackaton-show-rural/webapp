import { createContext, useState } from "react";
type TalhaoContextType = {
  showCadastro: boolean;
  setShowCadastro: (value: boolean) => void;
};

export const TalhaoContext = createContext({} as TalhaoContextType);

export const TalhaoProvider = ({ children }) => {
  const [showCadastro, setShowCadastro] = useState(true);

  const values = { showCadastro, setShowCadastro };
  return (
    <TalhaoContext.Provider value={values}>{children}</TalhaoContext.Provider>
  );
};
