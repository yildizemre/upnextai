import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kayit" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
