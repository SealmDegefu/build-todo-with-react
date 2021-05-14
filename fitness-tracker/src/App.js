
import './App.css';
import React from 'react';
import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './NavBar'
import Workout from './Components/Workout'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About'




class App extends React.Component {

    
    
render(){
  return (
    <Router>
    <div className="App">
    <NavBar/>
    <div className="content">
    <Switch>
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/Workout">
    <Workout />
    </Route>
    <Route path="/About">
    <About />
    </Route>
    </Switch>
    </div>
    </div>
    </Router>
  );
}
}


export default App;
