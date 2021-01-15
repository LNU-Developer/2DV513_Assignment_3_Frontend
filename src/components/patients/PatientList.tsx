import React, { useState, useEffect } from "react";
import EditPatientModal from "./EditPatientModal";
import AddButton from "../layout/AddButton";
import AddPatientModal from "./AddPatientModal";
import Patient from "../interfaces/patient.interface";

import "./patient.css";

const PatientList = () => {
  const [patients, setPatients] = useState<Patient[]>([]);

  const deletePatient = async (ssn: string) => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/patient/${ssn}`, {
        method: "DELETE",
      });
      setPatients(
        patients.filter((patient) => patient.SocialSecurityNumber !== ssn)
      );
    } catch (err) {
      console.error(err);
    }
  };

  const getPatients = async () => {
    const response = await fetch(
      process.env.REACT_APP_API_URL + "/patient/all"
    );
    const jsonData = await response.json();
    
    setPatients(jsonData);
    
  };
  useEffect(() => {
    // init materialize JS
    M.AutoInit();
  });

  useEffect(() => {
    getPatients();
  }, []);


  return (
    <div>
      {patients && !!patients.length && patients.map((patient) => {
        return (
          <div className="row" key={patient.SocialSecurityNumber}>
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <ul className="collapsible">
                    <li>
                      <div className="collapsible-header">
                        <span className="card-title">
                          {patient.FirstName} {patient.LastName}
                        </span>
                        <div className="delete-btn">
                          <button
                            className="btn-floating red"
                            onClick={() =>
                              deletePatient(patient.SocialSecurityNumber)
                            }
                          >
                            <i className="material-icons">clear</i>
                          </button>
                        </div>
                      </div>
                      <div className="collapsible-body">
                        <>
                          <p>Personnummer: {patient.SocialSecurityNumber}</p>
                          <p>
                            Identification Type: {patient.IdentificationType}
                          </p>
                          <p>
                            Skapad av: {patient.CreatedBy} -{" "}
                            <span>{patient.CreatedDate}</span>
                          </p>
                        </>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="card-action">
                  <a
                    href={`#${patient.SocialSecurityNumber}`}
                    className="btn-floating blue modal-trigger"
                  >
                    <i className="material-icons">edit</i>
                  </a>
                  <EditPatientModal
                    patient={patient}
                    updatePatientList={getPatients}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <AddButton />
      <AddPatientModal updatePatientList={getPatients} />
    </div>
  );
};

export default PatientList;
