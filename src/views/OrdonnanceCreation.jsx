import React, { useState, useEffect } from "react";
import axios from "axios";

const OrdonnanceCreation = () => {

const [patientSelected, setPatientSelected] = useState();
const [patientAddFirstName, setPatientAddFirstName] = useState();
const [patientAddLastname, setPatientAddLastname] = useState();

const handleSelectPatient = (e) => {
  setPatientSelected(e.target.value);
};

const handleAddPatientFirstname = (e) => {
  setPatientAddFirstName(e.target.value)
}

const handleAddPatientLastname = (e) => {
  setPatientAddLastname(e.target.value)
}

const handleAddPatient = (e) => {
  e.preventDefault();
};

const handleAddMedoc = () => {
  
}

const OrdonnanceCreation = (e) => {
    e.preventDefault();
  };

  

  return (
    <div>
      <h2>Create a prescription</h2>
      <div id="choose-patient">
        <form>
          <label htmlFor="patient">Patient</label>
          <select name="patient" id="patient" onChange={handleSelectPatient}>
            <option value="truc">truc</option>
            <option value="machin">machin</option>
            <option value="chose">chose</option>
          </select>
        </form>

        <form id="add-patient" onSubmit={handleAddPatient}>
          <label htmlFor="new_patient_firstname">Firstname</label>
          <input
            type="text"
            name="new_patient_firstname"
            id="new_patient_firstname"
            placeholder="new patient firstname"
            onChange={handleAddPatientFirstname}
          />

          <label htmlFor="new_patient_name">Lastname</label>
          <input
            type="text"
            name="new_patient_lastname"
            id="new_patient_lastname"
            placeholder="new patient lastname"
            onChange={handleAddPatientLastname}
          />
          <button type="submit">Add patient</button>
        </form>
      </div>

      <div id="medocs">
        <form id="add_medoc" onSubmit={handleAddMedoc}>
          <div>
            <label htmlFor="new_medoc_name">drug's name</label>
            <input
              type="text"
              name="new_medoc_name"
              id="new_medoc_name"
              placeholder="drug's name"
            />
          </div>

          <div>
            <label htmlFor="morning_medoc">Morning</label>
            <input type="checkbox" name="morning_medoc" id="morning_medoc" />
            <label htmlFor="noon_medoc">Noon</label>
            <input type="checkbox" name="noon_medoc" id="noon_medoc" />
            <label htmlFor="evening_medoc">Evening</label>
            <input type="checkbox" name="evening_medoc" id="evening_medoc" />
          </div>

          <div>
            <label htmlFor="date_begining">Start date</label>
            <input type="date" name="date_begining" id="date_begining" />
            <label htmlFor="date_end">End date</label>
            <input type="date" name="date_end" id="date_end" />
          </div>
          <button type="submit">Add Drug</button>
        </form>
      </div>
    </div>
  );
};

export default OrdonnanceCreation;
