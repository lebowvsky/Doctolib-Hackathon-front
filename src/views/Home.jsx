import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import styles from "./Home.module.css";
import doctorIcon from "../medias/doctor-02.svg";
import patientIcon from "../medias/patient-01.svg";
import LogoHorizontal from "../medias/logo-horizontalG-02.svg";
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

  const [showMedecins, setShowMedecins] = useState(false);
  const [showPatients, setShowPatients] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/patients`)
      .then((response) => response.data)
      .then((data) => {
        setPatientAll(data);
      });

    axios
      .get(`${process.env.REACT_APP_API_URL}/api/medecins`)
      .then((response) => response.data)
      .then((data) => {
        setMedecinAll(data);
      });
  }, []);

  const handleMedecin = (e) => {
    setMedecinId(Number(e.target.value));
    props.changeMedecinId(e.target.value);
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/medecins/${e.target.value}`)
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
      .get(`${process.env.REACT_APP_API_URL}/api/patients/${e.target.value}`)
      .then((response) => response.data)
      .then((data) => {
        props.changePatientFirstname(data[0].prenom);
        props.changePatientLastname(data[0].nom);
      });
  };

  const handleShowMedecins = () => {
    setShowMedecins(!showMedecins);
    setShowPatients(false);
  };

  const handleShowPatients = () => {
    setShowPatients(!showPatients);
    setShowMedecins(false);
  };

  return (
    <div className={styles.MainDiv}>
      <div className={styles.LogoDiv}>
        <img src={LogoHorizontal} alt='App Logo' />
        <h2 className={styles.LogoText}>My prescription</h2>
      </div>
      <div className={styles.FormDiv}>
        <div
          className={
            showMedecins ? styles.FormMedecinShow : styles.FormMedecinNoShow
          }
        >
          <form>
            <select
              name='medecin'
              id='medecin'
              onChange={handleMedecin}
              className={styles.Form}
            >
              {medecinAll.map((medecin) => {
                return (
                  <option
                    value={medecin.id}
                  >{`${medecin.prenom} ${medecin.nom}`}</option>
                );
              })}
            </select>
          </form>
          <Link to='/dashboard-medecin'>
            <div className={styles.ButtonEnter}>GO</div>
          </Link>
        </div>
        <div
          className={
            showPatients ? styles.FormPatientShow : styles.FormPatientNoShow
          }
        >
          <form>
            <select
              name='patient'
              id='patient'
              onChange={handlePatient}
              className={styles.Form}
            >
              {patientAll.map((patient) => {
                return (
                  <option
                    value={patient.id}
                  >{`${patient.prenom} ${patient.nom}`}</option>
                );
              })}
            </select>
          </form>
          <Link to='/dashboard-patient'>
            <div className={styles.ButtonEnter}>GO</div>
          </Link>
        </div>
      </div>
      <div className={styles.ButtonDiv}>
        <div className={styles.ButtonSubDiv}>
          <div className={styles.Button} onClick={handleShowMedecins}>
            <img class={styles.ButtonImg} src={doctorIcon} alt='Doctor icon' />
          </div>
          <p>Doctor</p>
        </div>
        <div className={styles.ButtonSubDiv}>
          <div className={styles.Button} onClick={handleShowPatients}>
            <img
              className={styles.ButtonImg}
              src={patientIcon}
              alt='Patient icon'
            />
          </div>
          <p>Patient</p>
        </div>
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
