
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import {Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={ <About />} />
    </Routes>
  );
}

export default App;
