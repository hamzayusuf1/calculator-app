import React, { useContext, createContext, useState } from "react";

const CalcContext = createContext();

export const useCalcContext = () => {
  return useContext(CalcContext);
};

export const CalcContextProvider = ({ children }) => {
  const [answer, setAnswer] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <CalcContext.Provider value={{ answer, setAnswer, checked, setChecked }}>
      {children}
    </CalcContext.Provider>
  );
};
