import React, {useEffect, useState} from 'react'
import Patient from "../interfaces/patient.interface";

 const FemaleList = () => {
     const [malePatients, setMalePatients] = useState<Patient[]>([]);

     const getMalePatients = async () => {
    const response = await fetch(
      process.env.REACT_APP_API_URL + "/patient/male"
    );
    const jsonData = await response.json();
    setMalePatients(jsonData);
  };

  useEffect(() => {
    // init materialize JS
    M.AutoInit();
  });

  useEffect(() => {
    getMalePatients();
  }, []);

    return (
    <>
      {malePatients.map((patient) => {
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