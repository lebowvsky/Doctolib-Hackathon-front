import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import styles from "./Home.module.css";
import { connect } from "react-redux";
import {
  changeMedecinId,
  changeMedecinFirstname,
  changeMedecinLastname,
} from "../actions/medecinAction";
import {
  changePatientId,
  changePatientFirstname,
  changePatientLastname,
} from "../actions/patientActions";

const Home = (props) => {
  const [medecinAll, setMedecinAll] = useState([]);
  const [medecinId, setMedecinId] = useState();
  const [medecinFirstname, setMedecinFirstname] = useState();
  const [medecinLastname, setMedecinLastname] = useState();
  const [patientAll, setPatientAll] = useState([]);
  const [patientId, setPatientId] = useState();
  const [patientFirstname, setPatientFirstname] = useState();
  const [patientLastname, setPatientLastname] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/patients")
      .then((response) => response.data)
      .then((data) => {
        setPatientAll(data);
      });

    axios
      .get("http://localhost:8080/api/medecins")
      .then((response) => response.data)
      .then((data) => {
        setMedecinAll(data);
      });
  }, []);

  const handleMedecin = (e) => {
    setMedecinId(Number(e.target.value));
    props.changeMedecinId(e.target.value);
    axios
      .get(`http://localhost:8080/api/medecins/${e.target.value}`)
      .then((response) => response.data)
      .then((data) => {
        props.changeMedecinFirstname(data[0].prenom);
        props.changeMedecinLastname(data[0].nom);
      });
  };

  const handlePatient = (e) => {
    setPatientId(Number(e.target.value));
    props.changePatientId(e.target.value);
    axios
      .get(`http://localhost:8080/api/patients/${e.target.value}`)
      .then((response) => response.data)
      .then((data) => {
        props.changePatientFirstname(data[0].prenom);
        props.changePatientLastname(data[0].nom);
      });
  };

  return (
    <div className={styles.MainDiv}>
      <h2>LOGO</h2>
      <div className={styles.ButtonDiv}>
        <form>
          <select name="medecin" id="medecin" onChange={handleMedecin}>
            {medecinAll.map((medecin) => {
              return (
                <option
                  value={medecin.id}
                >{`${medecin.prenom} ${medecin.nom}`}</option>
              );
            })}
          </select>
        </form>
        <Link to="/dashboard-medecin">
          <div className={styles.Button}>I am a doctor</div>
        </Link>
        <form>
          <select name="patient" id="patient" onChange={handlePatient}>
            {patientAll.map((patient) => {
              return (
                <option
                  value={patient.id}
                >{`${patient.prenom} ${patient.nom}`}</option>
              );
            })}
          </select>
        </form>
        <Link to="/dashboard-patient">
          <div className={styles.Button}>I am a patient</div>
        </Link>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeMedecinFirstname: (prenom) =>
      dispatch(changeMedecinFirstname(prenom)),
    changeMedecinLastname: (nom) => dispatch(changeMedecinLastname(nom)),
    changeMedecinId: (id) => dispatch(changeMedecinId(id)),
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
