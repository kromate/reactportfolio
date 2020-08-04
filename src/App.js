import React from 'react';
import './App.css';
import Nav from './component/Nav';
import Home from './views/Home';
import About from './views/About';
import Project from './views/Project';
import Contact from './views/Contact';
import { BrowserRouter as Router,  Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/project" exact component={Project}/>
        <Route path="/contact" exact component={Contact}/>
        {/* <Home />
        <About/>
        <Project/>
        <Contact/> */}
      </div>
    </Router>

  );
}

export default App;
