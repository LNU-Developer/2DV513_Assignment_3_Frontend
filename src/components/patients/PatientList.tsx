import React, {useState, useEffect} from 'react'

const PatientList = () => {
    const [patients, setPatients] = useState<any[]>([]);

    const getPatients = async () => {
            const response = await fetch("http://92.33.147.95:35000/patient/all");
            const jsonData = await response.json();
            setPatients(jsonData)
    }

    useEffect(() => {
        getPatients()
    }, [])

    return (
        <>
            {
                patients.map(patient => {
                    return <div>
                        <h4>{patient.FirstName} {patient.LastName}</h4>
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