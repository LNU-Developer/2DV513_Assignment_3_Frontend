import React, {useEffect} from 'react';
import "materialize-css/dist/css/materialize.min.css";
// @ts-ignore
import M from "materialize-css/dist/js/materialize.min.js";

import PatientList from './components/patients/PatientList'

function App() {
   useEffect(() => {
    // init materialize JS
    M.AutoInit();
  });
  return (
     <>
      <div className="container">
        <h1>Journal App</h1>
        <PatientList />
      </div>
    </>
  );
}

export default App;
