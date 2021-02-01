import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Header from "./components/Header";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    < Router>
      <div>
        < Header/>
          < Switch>
            < Route exact path="/myreactportfolio" component={About} />
            < Route exact path="/" component={About} />
            < Route exact path="/about" component={About} />
            < Route exact path="/resume" component={Resume} />
            < Route exact path="/portfolio" component={Portfolio} />
            < Route exact path="/contact" component={Contact} />
          </Switch>
        < Footer/>
      </div>
    </Router>
  );
}

export default App;
