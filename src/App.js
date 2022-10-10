import './App.css';
import { CostCalculation } from './CostCalculation/CostCalculation';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { HowWeWork } from './HowWeWork/HowWeWork';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <CostCalculation />
      <HowWeWork />
    </div>
  );
}

export default App;
