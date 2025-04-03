import Navbar from './Navbar';
import Home from './Home';
import MenuIcon from './MenuIcon';
import Team from './Team';
import Attributions from './Attributions.js';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import DescSection from './DescSection.js';

import { useState,useEffect } from 'react';
import ProjectDescription from './ProjectDescription.js';
// import './App.css';
function App() {

    

    
  return (
    <Router>
        <div className="App">
        
        
        <Navbar></Navbar>
        <Switch >
          <Route exact path='/'>
            <Home ></Home>
          </Route>
          <Route path='/members'>
            <Team ></Team>
          </Route>
          <Route path='/description'>
            <ProjectDescription/>
          </Route>
          <Route>
            <Attributions exact path='/attributions'></Attributions>
          </Route>
          
        </Switch>
        

      </div>
    </Router>

    
  );
}

export default App;
