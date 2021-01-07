import React, {useEffect} from 'react';
import "materialize-css/dist/css/materialize.min.css";
// @ts-ignore
import M from "materialize-css/dist/js/materialize.min.js";

import PatientList from './components/patients/PatientList'
import Navbar from "./components/layout/Navbar"

function App() {
   useEffect(() => {
    // init materialize JS
    M.AutoInit();
  });
  return (
     <>
        <Navbar />
      <div className="container">
        <PatientList />
      </div>
    </>
  );
}

export default App;
