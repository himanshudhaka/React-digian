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
import Counter from './components/Counter';
import Counterpage from './components/Counterpage';
import Countershow from './components/Countershow';


function App() {
  return (
    <>
    
      <Router>
      <Counter />
      <Switch>
          <Route exact path="/" component={Counterpage} />
          <Route path="/view" component={Countershow} />
      </Switch>
      </Router>
      

      

     
    </>
  );
}

export default App;

