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
  const [cities, setCities] = useState<City[]>([]);

    const getCity = async () => {
    const response = await fetch(
      process.env.REACT_APP_API_URL + "/patient/:city"
    );
    const jsonData = await response.json();
    console.log(jsonData);
    setCities(jsonData);
  };
 
   useEffect(() => {
    // init materialize JS
    M.AutoInit();
  });

  


  return (
     <>
     <Router>
        <Navbar   />
      <div className="container">
        <Switch>
          <Route exact path="/" component={PatientList} />
          <Route exact path="/patients/female" render={props => (
            <FemaleList />
          )}/>
          <Route exact path="/patients/male" component={MaleList} />
          <Route exact path="/patients/:city" render={props => (
            <CityList {...props} /* getCity={getCity} */ />
          )}/>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
