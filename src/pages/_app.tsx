import { type AppType } from "next/dist/shared/lib/utils";
import { TalhaoProvider } from "../lib/talhaoContext/talhaoContext";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <TalhaoProvider>
      <Component {...pageProps} />
    </TalhaoProvider>
  );
};

export default MyApp;
