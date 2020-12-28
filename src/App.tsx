import React, {useEffect} from 'react';
import "materialize-css/dist/css/materialize.min.css";
// @ts-ignore
import M from "materialize-css/dist/js/materialize.min.js";

import AddPatientModal from './components/patients/AddPatientModal'
import EditPatientModal from './components/patients/EditPatientModal'
import PatientList from './components/patients/PatientList'
import AddButton from './components/layout/AddButton'

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
        <AddButton />
        <AddPatientModal />
        <EditPatientModal />
      </div>
    </>
  );
}

export default App;
