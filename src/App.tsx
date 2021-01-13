import React, {useEffect, useState} from 'react';
import "materialize-css/dist/css/materialize.min.css";
// @ts-ignore
import M from "materialize-css/dist/js/materialize.min.js";

// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PatientList from './components/patients/PatientList'
import FemaleList from './components/patients/FemaleList'
import MaleList from './components/patients/MaleList'
import CityList from './components/patients/CityList'
import Navbar from "./components/layout/Navbar"

import City from "./components/interfaces/city.interface";
import Patient from "./components/interfaces/patient.interface";



const App: React.FC = () => {
 
   useEffect(() => {
    // init materialize JS
    M.AutoInit();
  });


  return (
     <>
     <Router>
        <Navbar  />
      <div className="container">
        <Switch>
          <Route exact path="/" component={PatientList} />
          <Route exact path="/patients/female" render={props => (
            <FemaleList />
          )}/>
          <Route exact path="/patients/male" component={MaleList} />
          <Route exact path="/patients/city" component={CityList} />
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
