import "./App.css";
import AnswerSection from "./components/AnswerSection";
import CalcButtons from "./components/CalcButtons";
import { CalcContextProvider, useCalcContext } from "./context/CalcContext";

function App() {
  const { checked } = useCalcContext();
  return (
    <div class="app" data-theme={checked}>
      <div className="calcApp">
        <div className="top-section">
          <AnswerSection />
        </div>
        <div className="main-container">
          <CalcButtons />
        </div>
      </div>
    </div>
  );
}

export default App;
