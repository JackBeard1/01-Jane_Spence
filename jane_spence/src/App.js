import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Contact from './components/Contact';
import Home from './components/Home';
import Topics from './components/Topics';
import Locations from './components/Locations';

// classes are stateful, functions are not
class App extends Component{
  render()
  {
    return (
      <BrowserRouter>
      <div>
            <Switch>
        
             <Route path="" component={Home}/>
             <Route path="/home" component={Home}/>
             <Route path="/locations" component={Locations}/>
             <Route path="/topics" component={Topics}/>
             <Route path="/contact" component={Contact}/>
             
            <Route component={Error}/>
           </Switch>
        </div> 
      
    </BrowserRouter>
    );
  }
}


export default App;
