import React, {useState} from 'react'

const AddPatientModal = (props: {updatePatientList: any}) => {
    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [SocialSecurityNumber, setSSN] = useState('')
    const [PhoneNo, setPhone] = useState("")
    const [Adress, setAddress] = useState("")
    const [PostalNo, setPostalNo] = useState("")
    const [City, setCity] = useState("")
    const [Email, setEmail] = useState("")
    const [IdentificationType, setIdentificationType] = useState('')
    const [CreatedBy, setCreatedBy] = useState(null)

    const submit = async (e:any) => {
        e.preventDefault()
        try {
            const body = {FirstName, LastName, SocialSecurityNumber, PhoneNo, Adress, PostalNo, City, Email, IdentificationType, CreatedBy}
            const response = await fetch(process.env.REACT_APP_API_URL+"/patient/add", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            props.updatePatientList();
        } catch (error) {
            console.log(error);
        }

    // if (firstName === "" || lastName === "" || ssn === "") {
    //   M.toast({ html: "Please enter a firstname, lastname and social security number" });
    // } else {
    //   console.log(firstName, lastName);
    //   // Clear fields
    //   setFirstName("");
    //   setLastName("");
    //   setSSN("");
    // }
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
              value={FirstName}
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
              value={LastName}
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
              value={Email}
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
              value={SocialSecurityNumber}
              onChange={(e) => setSSN(e.target.value)}
            />
            <label htmlFor="SocialSecurityNumber" className="active">
              Social Security Number
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="phone"
              value={PhoneNo}
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
              value={Adress}
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
              value={PostalNo}
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
              value={City}
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
              value={IdentificationType}
              onChange={(e) => setIdentificationType(e.target.value)}
            />
            <label htmlFor="identificationType" className="active">
              Identification Type
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={submit}
          className="modal-close waves-effect blue waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
}

export default AddPatientModal