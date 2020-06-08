import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import Services from './pages/Services'
import Prices from './pages/Prices'
import OpeningHours from './pages/OpeningHours'
import About from './pages/About'
import ScrollToTop from './scrollToTop'


function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div className="App">
        <Nav/>
        <Switch>
                <Route path = '/' exact component={LandingPage} />
                <Route path = '/services' component={Services} />
                <Route path = '/prices' component={Prices} />
                <Route path = '/hours' component={OpeningHours} />
                <Route path = '/about' component={About} />
        </Switch>
        <Footer/>

      </div>
    </Router>
  );
}

export default App;
