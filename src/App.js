import './CSS/App.css';
import React from "react";
import Navbar from "./Components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
       <Navbar>
        </Navbar>
            <Routes>
                <Route path="/" element={<Navigate to="/Home" />} />
                <Route exact path="/Home" element={<Home />} />
                <Route path="/About" element={<About />} />
            </Routes>
        </Router>
      </header>
      <Footer>
      </Footer>
    </div>
  );
}

export default App;

