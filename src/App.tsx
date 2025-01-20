import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import Brand from "./Brand"
import Performance from './Performance';
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
          <Route path="/influencer" element={<Service/>} />
          <Route path="/ecommerce" element={<Service/>} />
          <Route path="/marketplace" element={<Service/>} />
          <Route path="/digital" element={<Service/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
