import React, {useEffect, useState} from 'react'
import Patient from "../interfaces/patient.interface";
import {Link} from 'react-router-dom'

 const FemaleList = () => {
     const [femalePatients, setFemalePatients] = useState<Patient[]>([]);

     const getFemalePatients = async () => {
    const response = await fetch(
      process.env.REACT_APP_API_URL + "/patient/female"
    );
    const jsonData = await response.json();
    console.log(jsonData);
    setFemalePatients(jsonData);
  };

  useEffect(() => {
    // init materialize JS
    M.AutoInit();
  });

  useEffect(() => {
    getFemalePatients();
  }, []);

    return (
    <>
      {femalePatients.map((patient) => {
        return (
          <div className="row" key={patient.SocialSecurityNumber}>
            <div className="col s12 m4">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <ul className="collapsible">
                    <li>
                      <div className="collapsible-header">
                        <span className="card-title">
                          {patient.FirstName} {patient.LastName}
                        </span>
                      </div>
                      <div className="collapsible-body">
                        <>
                          <p>Personnummer: {patient.SocialSecurityNumber}</p>
                          <p>Email: {patient.Email}</p>
                          <p>Phone Number: {patient.PhoneNo}</p>
                          <p>
                            Adress: {patient.Adress} - {patient.City}
                          </p>
                          <p>
                            Postal Code: {patient.PostalNo}
                          </p>
                        </>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};


export default FemaleList