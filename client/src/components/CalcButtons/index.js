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

  const deleteNumber = () => {
    setAnswer(answer.slice(0, -1));
  };

  const reset = () => {
    setAnswer("");
  };

  const calculate = () => {
    setAnswer(eval(answer).toString());
    console.log("hello");
  };

  return (
    <div class="btns-grid">
      {/* {btns.map((btn) => (
        <button
          className="grid-item"
          key={btn}
          name={btn}
          onClick={handleClick}
        >
          {btn}
        </button>
      ))} */}
      <button className="grid-item" name="7" onClick={handleClick}>
        7
      </button>
      <button className="grid-item" name="8" onClick={handleClick}>
        8
      </button>
      <button className="grid-item" name="9" onClick={handleClick}>
        9
      </button>
      <button className="colour" name="DEL" onClick={deleteNumber}>
        Del
      </button>
      <button className="grid-item" name="4" onClick={handleClick}>
        4
      </button>
      <button className="grid-item" name="5" onClick={handleClick}>
        5
      </button>
      <button className="grid-item" name="6" onClick={handleClick}>
        6
      </button>
      <button className="grid-item" name="+" onClick={handleClick}>
        +
      </button>
      <button className="grid-item" name="1" onClick={handleClick}>
        1
      </button>
      <button className="grid-item" name="2" onClick={handleClick}>
        2
      </button>
      <button className="grid-item" name="3" onClick={handleClick}>
        3
      </button>
      <button className="grid-item" name="-" onClick={handleClick}>
        -
      </button>
      <button className="grid-item" onClick={handleClick}>
        .
      </button>
      <button className="grid-item" name="0" onClick={handleClick}>
        0
      </button>
      <button className="grid-item" name="/" onClick={handleClick}>
        /
      </button>
      <button className="grid-item" name="*" onClick={handleClick}>
        x
      </button>
      <button className="reset-btn colour" onClick={reset}>
        RESET
      </button>
      <button className="eql-btn" onClick={calculate}>
        =
      </button>
    </div>
  );
};

export default CalcButtons;
