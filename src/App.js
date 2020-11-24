import React from 'react';
import {  Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Services from './Components/services/Services';
import './App.scss'; 
import NavigationBar from "./Components/navbar/Navbar";
import Home from "./Components/Home/Home";
import Orders from "./Components/orders/Orders";
import Profile from "./Components/Profile/Profile";





function App() {
 
  return (

<BrowserRouter>
  <NavigationBar />
   
    <Switch>
      <Route exact path="/"  component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/orders" component={Orders} />
      <Route path="/profile" component={Profile} />
        <Redirect to="/" />
    </Switch>

     
    <NavigationBar />
 
    </BrowserRouter>

);
}

export default App;
