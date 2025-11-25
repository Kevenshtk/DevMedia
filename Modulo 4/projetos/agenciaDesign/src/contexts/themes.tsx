import { createContext, useState } from "react";

type ThemesContextType = {
  temaEscuro: boolean;
  alterarTema: () => void;
};

type ThemesProviderProps = {
  children: React.ReactNode;
};

export const ThemesContext = createContext<ThemesContextType | null>(null);

export const ThemesContextProvider = ({ children }: ThemesProviderProps) => {
  const [temaEscuro, setTemaEscuro] = useState<boolean>(false);

  function alterarTema() {
    setTemaEscuro(!temaEscuro);
  }

  return (
    <ThemesContext.Provider value={{ temaEscuro, alterarTema }}>
      {children}
    </ThemesContext.Provider>
  );
};
