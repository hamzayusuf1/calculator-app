import "./App.css";
import AnswerSection from "./components/AnswerSection";
import CalcButtons from "./components/CalcButtons";
import { CalcContextProvider } from "./context/CalcContext";

function App() {
  return (
    <CalcContextProvider>
      <div className="calcApp">
        <AnswerSection />
        <div className="main-container">
          <CalcButtons />
        </div>
      </div>
    </CalcContextProvider>
  );
}

export default App;
