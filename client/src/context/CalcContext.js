import React, { useContext, createContext, useState } from "react";

const CalcContext = createContext();

export const useCalcContext = () => {
  return useContext(CalcContext);
};

export const CalcContextProvider = ({ children }) => {
  const [answer, setAnswer] = useState("");

  return (
    <CalcContext.Provider value={{ answer, setAnswer }}>
      {children}
    </CalcContext.Provider>
  );
};
