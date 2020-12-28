import React, {useState, useEffect} from 'react'
import EditPatientModal from './EditPatientModal'

const PatientList = () => {
    const [patients, setPatients] = useState<any[]>([]);

    const deletePatient = async (ssn: string) => {
        try {
            const deletePatient = await fetch(`${process.env.REACT_APP_API_URL}/patient/${ssn}`, {
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
        getPatients()
    }, [])

    return (
        <>
            {
                patients.map((patient) => {
                    return <div key={patient.SocialSecurityNumber}>
                        <h4>
                            <a href="#edit-patient-modal" className="btn-floating blue modal-trigger">
                                <i className="material-icons"><EditPatientModal patient={patient} /></i>
                            </a>

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