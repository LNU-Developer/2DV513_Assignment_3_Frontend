import React, {useState, useEffect} from 'react'
import EditPatientModal from './EditPatientModal'

interface Patient {
    FirstName: string,
    LastName: string,
    SocialSecurityNumber: string,
    PhoneNo: string,
    Adress: string,
    PostalNo: string,
    City: string,
    Email: string,
    IdentificationType: string,
    CreatedBy: number,
    CreatedDate: Date
  }

const PatientList = () => {
    const [patients, setPatients] = useState<Patient[]>([]);

    const deletePatient = async (ssn: string) => {
        try {
            await fetch(`${process.env.REACT_APP_API_URL}/patient/${ssn}`, {
                method: "DELETE",
            });
            setPatients(patients.filter(patient => patient.SocialSecurityNumber !== ssn))
        } catch (err) {
            console.error(err);
        }
    }

    const getPatients = async () => {
            const response = await fetch(process.env.REACT_APP_API_URL+"/patient/all");
            const jsonData = await response.json();
            setPatients(jsonData)
    }
    useEffect(() => {
        // init materialize JS
        M.AutoInit();
      });

    useEffect(() => {
        getPatients()
    }, [])

    return (
        <>
            {
                patients.map((patient) => {
                    return <div key={patient.SocialSecurityNumber}>
                        <h4>
                            <a href={`#${patient.SocialSecurityNumber}`} className="btn-floating blue modal-trigger">
                                <i className="material-icons">edit</i>
                            </a>
                            <EditPatientModal patient={patient} />

                            <button className="btn-floating red" onClick={() => deletePatient(patient.SocialSecurityNumber)}>
                                <i className="material-icons">clear</i>
                            </button>

                            {patient.FirstName} {patient.LastName}
                        </h4>
                        <p>Personnummer: {patient.SocialSecurityNumber}</p>
                        <p>Identification Type: {patient.IdentificationType}</p>
                        <p>Skapad av: {patient.CreatedBy} - <span>{patient.CreatedDate}</span></p>
                    </div>
                })
            }
        </>
    )
}

export default PatientList