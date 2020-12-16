import React, {useState} from 'react'

const AddPatientModal = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [ssn, setSSN] = useState('')
    const [phone, setPhone] = useState("")
    const [adress, setAddress] = useState("")
    const [postalNo, setPostalNo] = useState("")
    const [city, setCity] = useState("")
    const [email, setEmail] = useState("")
    const [proofOfIdentification, setProofOfIdentification] = useState(true)
    const [identificationType, setIdentificationType] = useState('')
    const [createdBy, setCreatedBy] = useState(null)
    
    const onSubmit = async (e:any) => {
        e.preventDefault()
        try {
            const body = {firstName, lastName, ssn, phone, adress, postalNo, city, email, proofOfIdentification, identificationType, createdBy}
            const response = await fetch("http://92.33.147.95:35000/patient/all", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
        } catch (error) {
            console.log(error);
            
        }

    if (firstName === "" || lastName === "" || ssn === "") {
      M.toast({ html: "Please enter a firstname, lastname and social security number" });
    } else {
      console.log(firstName, lastName);
      // Clear fields
      setFirstName("");
      setLastName("");
      setSSN("");
    }
  };

  return (
    <div id="add-patient-modal" className="modal">
      <div className="modal-content">
        <h4>New Patient</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email" className="active">
              Email
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="ssn"
              value={ssn}
              onChange={(e) => setSSN(e.target.value)}
            />
            <label htmlFor="ssn" className="active">
              Social Security Number
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor="phone" className="active">
              Phone Number
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="adress"
              value={adress}
              onChange={(e) => setAddress(e.target.value)}
            />
            <label htmlFor="adress" className="active">
              Adress
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="postalNo"
              value={postalNo}
              onChange={(e) => setPostalNo(e.target.value)}
            />
            <label htmlFor="postalNo" className="active">
              Postal Number
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <label htmlFor="city" className="active">
              City
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="identificationType"
              value={identificationType}
              onChange={(e) => setIdentificationType(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Identification Type
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onSubmit={onSubmit}
          className="modal-close waves-effect blue waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
}

export default AddPatientModal