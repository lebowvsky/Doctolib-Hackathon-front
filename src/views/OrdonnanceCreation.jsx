import React, { useState, useEffect } from "react";
import axios from "axios";
import Medoc from "../components/Medoc";

const OrdonnanceCreation = () => {
  const [patientSelected, setPatientSelected] = useState();
  const [patientAddFirstName, setPatientAddFirstName] = useState();
  const [patientAddLastname, setPatientAddLastname] = useState();
  const [medocSelected, setMedocSelected] = useState();
  const [morning, setMorning] = useState(false);
  const [noon, setNoon] = useState(false);
  const [evening, setEvening] = useState(false);
  const [morningMedocQuantity, setMorningMedocQuantity] = useState();
  const [noonMedocQuantity, setNoonMedocQuantity] = useState();
  const [eveningMedocQuantity, setEveningMedocQuantity] = useState();
  const [dateStart, setDateStart] = useState();
  const [dateEnd, setDateEnd] = useState();

  const handleSelectPatient = (e) => {
    setPatientSelected(e.target.value);
  };

  const handleAddPatientFirstname = (e) => {
    setPatientAddFirstName(e.target.value);
  };

  const handleAddPatientLastname = (e) => {
    setPatientAddLastname(e.target.value);
  };

  const handleAddPatient = (e) => {
    e.preventDefault();
  };

  const handleAddMedoc = () => {};

  const handleSelectMedoc = (e) => {
    setMedocSelected(e.target.value);
  };

  const morningCheck = (e) => {
    e.target.checked ? setMorning(true) : setMorning(false);
  };

  const noonCheck = (e) => {
    e.target.checked ? setNoon(true) : setNoon(false);
  };

  const eveningCheck = (e) => {
    e.target.checked ? setEvening(true) : setEvening(false);
  };

  const morningQuantity = (e) => {
    setMorningMedocQuantity(Number(e.target.value));
  };

  const noonQuantity = (e) => {
    setNoonMedocQuantity(Number(e.target.value));
  };

  const eveningQuantity = (e) => {
    setEveningMedocQuantity(Number(e.target.value));
  };

  const medocDateStart = (e) => {
    setDateStart(e.target.value);
  };

  const medocDateEnd = (e) => {
    setDateEnd(e.target.value);
  };

  const handleSubmitCommande = () => {};

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
          <button type="submit">Add Drug</button>
        </form>
      </div>

      <div id="ordonnance">
        <h3>Firstname Lastname</h3>
        <Medoc
          handleSubmitCommande={handleSubmitCommande}
          handleSelectMedoc={handleSelectMedoc}
          morningCheck={morningCheck}
          noonCheck={noonCheck}
          eveningCheck={eveningCheck}
          medocDateStart={medocDateStart}
          medocDateEnd={medocDateEnd}
          morningQuantity={morningQuantity}
          noonQuantity={noonQuantity}
          eveningQuantity={eveningQuantity}
          isMorningTrue={morning}
          isNoonTrue={noon}
          isEveningTrue={evening}
        />
      </div>
    </div>
  );
};

export default OrdonnanceCreation;
