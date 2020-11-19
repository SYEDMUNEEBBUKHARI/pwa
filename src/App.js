import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Services from './Components/services/Services';
import './App.scss'; 
import NavigationBar from "./Components/navbar/Navbar";
import Home from "./Components/Home/Home";



function App() {
 
  return (
  <> 
    <BrowserRouter>
    <Switch>
      <Route exact path="/"  component={Home}/>
      <Route path="/services" component={Services}/>
      <Route  component={Home}/>

    </Switch>
    <NavigationBar />

  </BrowserRouter>

  </>);
}

export default App;
