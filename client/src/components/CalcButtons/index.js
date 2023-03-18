import React from "react";
import { useCalcContext } from "../../context/CalcContext";
import "./index.css";

const btns = [7, 8, 9, "DEL", 4, 5, 6, "+", 1, 2, 3, "-", ".", 0, "/", "x"];

const CalcButtons = () => {
  const { answer, setAnswer } = useCalcContext();
  return (
    <div className="btns-grid">
      {btns.map((btn) => (
        <div>
          <button
            onClick={() => {
              console.log(btn.innerHTML);
            }}
            className="grid-item"
            key={btn}
          >
            {btn}
          </button>
        </div>
      ))}
      <button className="reset-btn">RESET</button>
      <button className="eql-btn">=</button>
    </div>
  );
};

export default CalcButtons;
