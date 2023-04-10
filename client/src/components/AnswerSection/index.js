import React from "react";
import { useCalcContext } from "../../context/CalcContext";
import "./index.css";
import { Textfit } from "react-textfit";

const AnswerSection = () => {
  const { answer, setAnswer, checked, setChecked } = useCalcContext();

  const handleChecked = (e) => {
    setChecked(e.target.checked);
    console.log(checked);
  };

  return (
    <div>
      <div className="top">
        <h1 id="header">Calculator</h1>
        <div className="toggle">
          <input onChange={handleChecked} type="checkbox" id="darkmode" />
          <label for="darkmode"></label>
        </div>
      </div>
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
