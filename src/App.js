import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Services from './Components/services/Services';
import './App.scss'; 



function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/"  component={Services}/>
      <Route component={Services}/>


    </Switch>
  </BrowserRouter>
  );
}

export default App;
