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
import AppProjects from "./Pages/AppProjects";
import WebProjects from "./Pages/WebProjects";
import Contact from "./Pages/Contact";

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
                <Route path="/Contact" element={<Contact />}
                />
            </Routes>
        </Router>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a> */}
      </header>
    </div>
  );
}

export default App;

