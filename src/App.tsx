import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import Brand from "./Brand"
import Performance from './Performance';
import Influencer from './Influencer';
import EcommercePage from './EcommercePage';
import Marketplace from './Markeplace';
import DigitalArts from './DigitalArts';
import Contact from './Contact';
import Footer from './Footer';
import Career from './Career';
import CareerInfo from  "./JobDetail"
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/brand" element={<Brand/>} />
          <Route path="/performance" element={<Performance/>} />
          <Route path="/influencer" element={<Influencer/>} />
          <Route path="/ecommerce" element={<EcommercePage/>} />
          <Route path="/marketplace" element={<Marketplace/>} />
          <Route path="/digital" element={<DigitalArts/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/career" element={<Career/>} />
          <Route path="/careerinfo" element={<CareerInfo/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
