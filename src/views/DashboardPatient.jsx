import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import styles from "./DashboardPatient.module.css";
import { Link } from "react-router-dom";

import Clock from "./Clock";

const DashboardPatient = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [prescriptions, setPrescriptions] = useState([]);
  const [error, setError] = useState("");
  const [prescriptionLength, setLength] = useState();

  useEffect(() => {
    const getPresc = async () => {
      try {
        const prescr = await axios.get(
          `http://localhost:8080/api/patients/${props.patient.id}/ordonnances`
        );
        setLength(prescr.data.length);
        setPrescriptions(prescr.data);
      } catch (err) {
        setError(err);
      }
    };
    getPresc();
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.dashboard}>
        <div className={styles.topPage}>
          <div className={styles.title}>
            My Dashboard
            <p className={styles.prenom}>
              {props.patient.nom} {props.patient.prenom}
            </p>
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
              My prescriptions
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
          <p className={styles.notifTitle}>Next notifs</p>
        </div>
        <div className={styles.new}>
          <p className={styles.notifNumber}>+</p>
          <p className={styles.notifTitle}>Add new</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <Link to='/'>
          <div className={styles.disconnect}>Q</div>
        </Link>
        <div onClick='' className={styles.drugHistory}>
          <p>My drug history</p>
          <p className={styles.subtitleEmergency}>In case of emergency</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    patient: state.patient,
  };
};

export default connect(mapStateToProps)(DashboardPatient);
