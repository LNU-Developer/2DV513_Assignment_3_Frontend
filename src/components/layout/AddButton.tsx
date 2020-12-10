import React from "react";

const AddButton = () => {
  return (
    <div className="fixed-action-btn">
      <a
        href="#"
        className="btn-floating btn-large blue darken-2 modal-trigger"
      >
        <i className="large material-icons">add</i>
      </a>
      <ul>
        <li>
          <a
            href="#add-journal-modal"
            className="btn-floating green modal-trigger"
          >
            <i className="material-icons">assignment</i>
          </a>
        </li>
        <li>
          <a href="#add-patient-modal" className="btn-floating red modal-trigger">
            <i className="material-icons">person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddButton;