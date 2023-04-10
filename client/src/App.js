import "./App.css";
import AnswerSection from "./components/AnswerSection";
import CalcButtons from "./components/CalcButtons";
import { CalcContextProvider, useCalcContext } from "./context/CalcContext";
import { Helmet } from "react-helmet";

function App() {
  const { checked } = useCalcContext();
  return (
    <div class="app" data-theme={checked}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Calculator App</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
