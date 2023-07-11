import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import PricingAndProcedure from './views/PricingAndProcedure';
import Navbar from './components/Navbar';
import About from './views/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home title="Home" />} />
          <Route path="/pricing-and-procedure" element={<PricingAndProcedure title="Pricing & Procedure" />} />
          <Route path="/about" element={<About title="About" />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
