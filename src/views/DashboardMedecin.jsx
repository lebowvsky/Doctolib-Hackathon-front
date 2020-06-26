import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./DashboardMedecin.module.css";

import axios from "axios";
import { connect } from "react-redux";
import {
  changePatientId,
  changePatientFirstname,
  changePatientLastname,
} from "../actions/patientActions";
import { changeOrdonnancesId } from "../actions/ordonnanceActions";
import HomeIcon from "../medias/home-button.svg";
import discoIcon from "../medias/disconnect-button.svg";
import Clock from "./Clock";

const DashboardMedecin = (props) => {
  const [patientAll, setPatientAll] = useState([]);
  const [patientSelectedId, setPatientSelectedId] = useState();
  const [patientSelectedFirstname, setPatientSelectedFirstname] = useState();
  const [patientSelectedLastname, setPatientSelectedLastname] = useState();
  const [patientAddFirstName, setPatientAddFirstName] = useState();
  const [patientAddLastname, setPatientAddLastname] = useState();
  const [medocToAdd, setMedocToAdd] = useState();
  const [catchError, setCatchError] = useState();

  const [isOpen, setIsOpen] = useState(false);
  const [prescriptions, setPrescriptions] = useState([]);
  const [error, setError] = useState("");
  const [prescriptionLength, setLength] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/patients")
      .then((response) => response.data)
      .then((data) => {
        setPatientAll(data);
      });
  }, []);

  /* const handleSelectPatient = (e) => {
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
  }; */

  const handleAddPatientFirstname = (e) => {
    setPatientAddFirstName(e.target.value);
  };

  const handleAddPatientLastname = (e) => {
    setPatientAddLastname(e.target.value);
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
      await axios.post("http://localhost:8080/api/ordonnances", {
        id_patient: props.patient.id,
        id_medecin: props.medecin.id,
      });
      const lastOrdoId = await axios.get(
        "http://localhost:8080/api/ordonnances/last"
      );
      props.changeOrdonnancesId(lastOrdoId.data[0].id);
      props.history.push("/ordonnance-creation");
    } catch (err) {
      setCatchError(err);
    }
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.dashboard}>
        <div className={styles.topPage}>
          <div className={styles.topLeft}>
            <div className={styles.back}>
              <img src={HomeIcon} alt='home icon' className={styles.homeIcon} />
            </div>
            <div className={styles.title}>
              My Dashboard
              <p className={styles.prenom}>
                {props.patient.nom} {props.patient.prenom}
              </p>
            </div>
          </div>
          <Clock />
        </div>
        <div className={isOpen ? styles.open : styles.close}>
          <div
            className={
              isOpen
                ? styles.prescriptionInfosOpen
                : styles.prescriptionInfosClose
            }
          >
            <p
              onClick={() => handleClick()}
              className={styles.prescriptionTitle}
            >
              My patients
            </p>
            <p
              onClick={() => handleClick()}
              className={styles.prescriptionNumber}
            >
              {prescriptionLength}
            </p>
          </div>
          <div className={isOpen ? styles.contentOpen : styles.contentClose}>
            {prescriptions.map((prescription) => {
              return (
                <div>
                  <Link to={`/ordonnance-details/${prescription.id}`}>
                    <p className={styles.prescriptionName}>
                      Ordonnance n°{prescription.id}
                    </p>
                    <p className={styles.prescriptionDescription}>
                      Medecin : {prescription.nom} {prescription.prenom}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.reminder}>
          <p className={styles.notifNumber}>8</p>
          <p className={styles.notifTitle}>To Do List</p>
        </div>
        <div className={styles.createOrdo}>
          <Link to='/ordonnance-creation'></Link>
          <p className={styles.ordoPlus}>+</p>
          <p className={styles.notifTitle}>New Prescription</p>
        </div>
        {/* <div id='medocs'>
          <form id='add_medoc' onSubmit={handleAddMedoc}>
            <div>
              <label htmlFor='new_medoc_name'>drug's name</label>
              <input
                type='text'
                name='new_medoc_name'
                id='new_medoc_name'
                placeholder="drug's name"
                onChange={addMedocOnHooks}
              />
            </div>
            <button type='submit'>Add Drug</button>
          </form>
        </div> */}
      </div>
      <div className={styles.bottom}>
        <Link to='/'>
          <div className={styles.disconnect}>
            <img
              src={discoIcon}
              alt='disconnection icon'
              className={styles.discoIcon}
            />
          </div>
        </Link>
        <div onClick='' className={styles.drugHistory}>
          <p>Useful Contacts</p>
          <p className={styles.subtitleEmergency}>For Emergency</p>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePatientFirstname: (prenom) =>
      dispatch(changePatientFirstname(prenom)),
    changePatientLastname: (nom) => dispatch(changePatientLastname(nom)),
    changePatientId: (id) => dispatch(changePatientId(id)),
    changeOrdonnancesId: (id) => dispatch(changeOrdonnancesId(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    medecin: state.medecin,
    patient: state.patient,
    ordonnance: state.ordonnance,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardMedecin);
