import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Form from './components/Form';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';
import Api from './components/Api';


function App() {
  return (
    <>
    
      {/* <Api /> */}

      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Form} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

