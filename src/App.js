import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Services from './Components/services/Services';
import './App.scss'; 
import NavigationBar from "./Components/navbar/Navbar";
import Home from "./Components/Home/Home";
import Orders from "./Components/orders/Orders";
import Profile from "./Components/Profile/Profile";




function App() {
 
  return (
  <> 
    <BrowserRouter>
    <Switch>
      <Route exact path="/"  component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/orders" component={Orders} />
      <Route path="/profile" component={Profile} />
      <Route  component={Home} />
    </Switch>
    <NavigationBar />
  </BrowserRouter>

  </>);
}

export default App;
