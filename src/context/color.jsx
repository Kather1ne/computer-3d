import { createContext, useState } from "react";
import getRandomColorSet from "../helpers/getRandomColorSet";

const defaultValue = getRandomColorSet();

export const ColorContext = createContext({ colorSet: defaultValue });

export const ColorContextProvider = ({ children }) => {
  const [value, setValue] = useState(defaultValue);
  
  return (
    <ColorContext.Provider
      value={{ colorSet: value, changeColorSet: setValue }}
    >
      {children}
    </ColorContext.Provider>
  );
};
