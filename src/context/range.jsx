import { createContext, useState } from "react";

export const RangeContext = createContext({ range: 0 });

export const RangeContextProvider = ({ children }) => {
  const [value, setValue] = useState(0);

  return (
    <RangeContext.Provider value={{ range: value, changeRange: setValue }}>
      {children}
    </RangeContext.Provider>
  );
};
