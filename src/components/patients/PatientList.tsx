import React, {useState, useEffect} from 'react'

const PatientList = () => {
    const [patients, setPatients] = useState<any[]>([]);

    const getPatients = async () => {
        try {
            const response = await fetch("http://92.33.147.95:35000/patient/all");
            const jsonData = await response.json();
            setPatients(jsonData)
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        getPatients()
    }, [])

    return (
        <>
            {
                patients.map(patient => {
                    return <div>
                        <h2>{patient.firstName}</h2>
                        <h2>{patient.lastName}</h2>
                    </div>
                })
            }
        </>
    )
}

export default PatientList