import { useContext } from "react";
import { TalhaoContext } from "./TalhaoContext";

export const useTalhaoContext = () => {
  const context = useContext(TalhaoContext);

  if (context === undefined) {
    throw new Error(
      "useTalhaoContext must be used within a TalhaoContext.Provider"
    );
  }

  return context;
};
