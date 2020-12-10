import React, {useState} from 'react'

const AddPatientModal = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    
    const onSubmit = async (e:any) => {
        e.preventDefault()
        try {
            const body = {firstName, lastName}
            const response = await fetch("http://92.33.147.95:35000/patient/all", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
        } catch (error) {
            console.log(error);
            
        }

    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter a firstname and lastname" });
    } else {
      console.log(firstName, lastName);
      // Clear fields
      setFirstName("");
      setLastName("");
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
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Social Security Number
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