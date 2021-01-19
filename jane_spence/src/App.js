import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Contact from './components/Contact';
import Home from './components/Home';
import Topics from './components/Topics';
import Locations from './components/Locations';
import Footer from './components/Footer/Footer.js';
import Footer2 from './components/Footer/Footer2.js';

// classes are stateful, functions are not
class App extends Component{
  render()
  {
    return (
      <BrowserRouter>
      <div>
            <Switch>
        
             <Route exact path="/" component={Home}/>
             <Route exact path="/home" component={Home}/>
             <Route exact path="/locations" component={Locations}/>
             <Route exact path="/topics" component={Topics}/>
             <Route exact path="/contact" component={Contact}/>
             
            <Route component={Error}/>
           </Switch>
      </div> 
      <Footer2></Footer2>
      <Footer></Footer>
      
      </BrowserRouter>
    
    );
  }
}


export default App;
