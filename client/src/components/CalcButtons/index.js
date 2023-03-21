import React from "react";
import { useCalcContext } from "../../context/CalcContext";
import "./index.css";

const btns = [
  "7",
  "8",
  "9",
  "DEL",
  "4",
  "5",
  "6",
  "+",
  "1",
  "2",
  "3",
  "-",
  ".",
  "0",
  "/",
  "x",
];

// const CalcButtons = () => {
//   const { answer, setAnswer } = useCalcContext();
//   const handleClick = (btn) => {
//     if (typeof btn === "number") {
//       console.log(answer);
//       const numArr = answer.toString().split("").push(6).map(Number);
//       console.log(numArr);

//       // setAnswer(btn);
//     } else {
//       // do nothing
//     }
//   };

//   return (
//     <div className="btns-grid">
//       {btns.map((btn) => (
//         <div
//           onClick={() => {
//             handleClick(btn);
//           }}
//         >
//           <button className="grid-item" key={btn}>
//             {btn}
//           </button>
//         </div>
//       ))}
//       <button className="reset-btn">RESET</button>
//       <button className="eql-btn">=</button>
//     </div>
//   );
// };

const CalcButtons = () => {
  const { answer, setAnswer } = useCalcContext();

  const handleClick = (e) => {
    setAnswer(answer.concat(e.target.name));
    console.log(answer);
  };

  return (
    <div class="btns-grid">
      {btns.map((btn) => (
        <button
          className="grid-item"
          key={btn}
          name={btn}
          onClick={handleClick}
        >
          {btn}
        </button>
      ))}
      {/* <button onClick={handleClick}>7</button>
      <button onClick={handleClick}>8</button>
      <button onClick={handleClick}>9</button>
      <button onClick={handleClick}>Del</button>
      <button onClick={handleClick}>4</button>
      <button onClick={handleClick}>5</button>
      <button onClick={handleClick}>6</button>
      <button>+</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button>/</button>
      <button>x</button> */}
      <button className="reset-btn">RESET</button>
      <button className="eql-btn">=</button>
    </div>
  );
};

export default CalcButtons;
