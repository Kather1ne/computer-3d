import { createContext, useState } from "react";

export const BodyContext = createContext({ body: 0, face: 0 });

const getRandomValues = (length) => {
  const body = Math.floor(Math.random() * length);
  const face = Math.floor(Math.random() * length);
  return { body, face };
};

export const BodyContextProvider = ({ children }) => {
  const [value, setValue] = useState(getRandomValues(4));

  const setRandomValue = (length) => {
    setValue(getRandomValues(length));
  };

  return (
    <BodyContext.Provider value={{ ...value, setRandomValue }}>
      {children}
    </BodyContext.Provider>
  );
};
