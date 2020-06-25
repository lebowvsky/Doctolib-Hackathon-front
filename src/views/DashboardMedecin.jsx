import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { connect } from "react-redux";
import {
  changePatientId,
  changePatientFirstname,
  changePatientLastname,
} from "../actions/patientActions";

const DashboardMedecin = (props) => {
  const [patientAll, setPatientAll] = useState([]);
  const [patientSelectedId, setPatientSelectedId] = useState();
  const [patientSelectedFirstname, setPatientSelectedFirstname] = useState();
  const [patientSelectedLastname, setPatientSelectedLastname] = useState();
  const [patientAddFirstName, setPatientAddFirstName] = useState();
  const [patientAddLastname, setPatientAddLastname] = useState();
  const [medocToAdd, setMedocToAdd] = useState();
  const [catchError, setCatchError] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/patients")
      .then((response) => response.data)
      .then((data) => {
        setPatientAll(data);
      });
  }, []);

  const handleSelectPatient = (e) => {
    setPatientSelectedId(Number(e.target.value));
    axios
      .get(`http://localhost:8080/api/patients/${e.target.value}`)
      .then((response) => response.data)
      .then((data) => {
        props.changePatientFirstname(data[0].prenom);
        props.changePatientLastname(data[0].nom);
        props.changePatientId(data[0].id);
        setPatientSelectedFirstname(data[0].prenom);
        setPatientSelectedLastname(data[0].nom);
      });
  };

  const handleAddPatientFirstname = (e) => {
    setPatientAddFirstName(e.target.value);
  };

  const handleAddPatientLastname = (e) => {
    setPatientAddLastname(e.target.value);
  };

  const handleAddPatient = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/patients", {
        nom: patientAddLastname,
        prenom: patientAddFirstName,
      });
      const addAllPat = await axios.get("http://localhost:8080/api/patients");
      setPatientAll(addAllPat.data);
    } catch (err) {
      setCatchError(err);
    }
  };

  const addMedocOnHooks = (e) => {
    setMedocToAdd(e.target.value);
  };

  const handleAddMedoc = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/produits", { nom: medocToAdd })
      .then((res) => res.data)
      .then((res) => {
        alert("Medoc ajouté");
      })
      .catch((e) => {
        console.error(e);
        alert(`Erreur lors de l'ajout du produit : ${e.message}`);
      });
  };

  const handleCreateOrdonnance = async (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:8080/api/ordonnances", {
        id_patient: props.patient.id,
        id_medecin: props.medecin.id,
      });
    } catch (err) {
      setCatchError(err);
    }
  };

  return (
    <>
      <h2>DashboardMedecin</h2>
      <div>Date/heure</div>
      <div>
        <Link to="/patients">
          <button>Patients</button>
        </Link>
      </div>
      <div>
        <button onClick={handleCreateOrdonnance}>Create prescription</button>
      </div>
      <div id="choose-patient">
        <form>
          <h3>Choose a patient</h3>
          <label htmlFor="patient">Patient</label>
          <select name="patient" id="patient" onChange={handleSelectPatient}>
            {patientAll.map((patient) => {
              return (
                <option
                  value={`${patient.id}`}
                >{`${patient.nom} ${patient.prenom}`}</option>
              );
            })}
          </select>
        </form>

        <form id="add-patient" onSubmit={handleAddPatient}>
          <h3>Create a patient</h3>
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
              onChange={addMedocOnHooks}
            />
          </div>
          <button type="submit">Add Drug</button>
        </form>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePatientFirstname: (prenom) =>
      dispatch(changePatientFirstname(prenom)),
    changePatientLastname: (nom) => dispatch(changePatientLastname(nom)),
    changePatientId: (id) => dispatch(changePatientId(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    medecin: state.medecin,
    patient: state.patient,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardMedecin);
