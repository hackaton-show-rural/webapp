import { type AppType } from "next/dist/shared/lib/utils";
import { createContext, useState } from "react";

import "../styles/globals.css";
export const TalhaoContext = createContext({});

const MyApp: AppType = ({ Component, pageProps }) => {
  const [showCadastro, setShowCadastro] = useState(false);
  const values = { showCadastro, setShowCadastro };

  return (
    <TalhaoContext.Provider value={values}>
      <Component {...pageProps} />
    </TalhaoContext.Provider>
  );
};

export default MyApp;
