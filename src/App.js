import './App.css';
import { CostCalculation } from './CostCalculation/CostCalculation';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <CostCalculation />
    </div>
  );
}

export default App;
