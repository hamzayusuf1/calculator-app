import React from "react";
import { useCalcContext } from "../../context/CalcContext";
import "./index.css";
import { Textfit } from "react-textfit";

const AnswerSection = () => {
  const { answer, setAnswer } = useCalcContext();

  return (
    <div>
      <h1>Calculator time...</h1>
      <div className="answer-field" style={{ height: "70px", width: "300px" }}>
        <Textfit
          mode="multi"
          style={{ width: "300px", height: "50px", textAlign: "end" }}
        >
          {answer}
        </Textfit>
      </div>
    </div>
  );
};

export default AnswerSection;
