import React, { useState } from 'react';
import Patient from '../interfaces/patient.interface';

const EditPatientModal = (props: {
    patient: Patient;
    updatePatientList: any;
}) => {
    const [UserId] = useState(props.patient.UserId);
    const [FirstName, setFirstName] = useState(props.patient.FirstName);
    const [LastName, setLastName] = useState(props.patient.LastName);
    const [SocialSecurityNumber, setSSN] = useState(
        props.patient.SocialSecurityNumber
    );
    const [PhoneNo, setPhone] = useState(props.patient.PhoneNo);
    const [Adress, setAddress] = useState(props.patient.Adress);
    const [PostalNo, setPostalNo] = useState(props.patient.PostalNo);
    const [City, setCity] = useState(props.patient.City);
    const [Email, setEmail] = useState(props.patient.Email);
    const [IdentificationType, setIdentificationType] = useState(
        props.patient.IdentificationType
    );
    const [CreatedBy, setCreatedBy] = useState(null);

    const updatePatient = async (e: any) => {
        e.preventDefault();
        try {
            const body = {
                UserId,
                FirstName,
                LastName,
                SocialSecurityNumber,
                PhoneNo,
                Adress,
                PostalNo,
                City,
                Email,
                IdentificationType,
                CreatedBy,
            };
            await fetch(`${process.env.REACT_APP_API_URL}/patient/edit`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            props.updatePatientList();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div id={props.patient.SocialSecurityNumber} className='modal'>
            <div className='modal-content'>
                <h4>Edit Patient</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='firstName'
                            value={FirstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <label htmlFor='firstName' className='active'>
                            First Name
                        </label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='lastName'
                            value={LastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <label htmlFor='lastName' className='active'>
                            Last Name
                        </label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='email'
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor='email' className='active'>
                            Email
                        </label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='ssn'
                            value={SocialSecurityNumber}
                            onChange={(e) => setSSN(e.target.value)}
                        />
                        <label
                            htmlFor='SocialSecurityNumber'
                            className='active'>
                            Social Security Number
                        </label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='phone'
                            value={PhoneNo}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <label htmlFor='phone' className='active'>
                            Phone Number
                        </label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='adress'
                            value={Adress}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <label htmlFor='adress' className='active'>
                            Adress
                        </label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='postalNo'
                            value={PostalNo}
                            onChange={(e) => setPostalNo(e.target.value)}
                        />
                        <label htmlFor='postalNo' className='active'>
                            Postal Number
                        </label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='city'
                            value={City}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <label htmlFor='city' className='active'>
                            City
                        </label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='identificationType'
                            value={IdentificationType}
                            onChange={(e) =>
                                setIdentificationType(e.target.value)
                            }
                        />
                        <label htmlFor='identificationType' className='active'>
                            Identification Type
                        </label>
                    </div>
                </div>
            </div>
            <div className='modal-footer'>
                <a
                    href='#!'
                    onClick={updatePatient}
                    className='modal-close waves-effect blue waves-light btn'>
                    Enter
                </a>
            </div>
        </div>
    );
};

export default EditPatientModal;
