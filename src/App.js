
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import {Routes, Route } from "react-router";
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={ <About />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
