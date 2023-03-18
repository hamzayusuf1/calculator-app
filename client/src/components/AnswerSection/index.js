import React from "react";
import { useCalcContext } from "../../context/CalcContext";
import "./index.css";

const AnswerSection = () => {
  const { answer, setAnswer } = useCalcContext();

  return (
    <div>
      <h1>Calculator time...</h1>
      <div className="answer-field">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default AnswerSection;
