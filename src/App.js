import "./App.css";
import { CostCalculation } from "./CostCalculation/CostCalculation";
import { Header } from "./Header/Header";
import { Hero } from "./Hero/Hero";
import { HowWeWork } from "./HowWeWork/HowWeWork";
import { Feedback } from "./Feedback/Feedback";
import { Footer } from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="appContainer">
        <Header />
        <Hero />
        <CostCalculation />
        <HowWeWork />
      </div>
      <div className="footerBlocks">
        <div className="appContainer">
          <Feedback />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
