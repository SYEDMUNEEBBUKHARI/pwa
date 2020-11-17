import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Services from './Components/services/Services';
import './App.scss'; 
import NavigationBar from "./Components/navbar/Navbar";



function App() {
  return (<> 
    <BrowserRouter>
    <Switch>
      <Route exact path="/"  component={Services}/>
      <Route component={Services}/>


    </Switch>
  </BrowserRouter>
  <NavigationBar />
  </>);
}

export default App;
