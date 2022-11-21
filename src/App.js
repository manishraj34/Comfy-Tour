// import logo from './logo.svg';
import "./App.css";

import Home from "./components/routes/Home";
import About from "./components/routes/About";
import Services from "./components/routes/Services";
import Contact from "./components/routes/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Routes>
          <Route path="/services" element={<Services />}></Route>
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
