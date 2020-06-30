import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import styles from "./DashboardPatient.module.css";
import { Link } from "react-router-dom";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";

import Clock from "./Clock";
import HomeIcon from "../medias/home-button.svg";
import discoIcon from "../medias/disconnect-button.svg";

const DashboardPatient = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [prescriptions, setPrescriptions] = useState([]);
  const [error, setError] = useState("");
  const [prescriptionLength, setLength] = useState();
  const [formDate, setFormDate] = useState("");

  useEffect(() => {
    const getPresc = async () => {
      try {
        const prescr = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/patients/${props.patient.id}/ordonnances`
        );
        setLength(prescr.data.length);
        setPrescriptions(prescr.data);
      } catch (err) {
        setError(err);
      }
    };
    getPresc();
  }, []);

  const Bip = () => {
    store.addNotification({
      title: "Médicament à prendre",
      message: "2 spasfon le midi",
      type: "info",
      insert: "top",
      container: "top-center",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 7000,
        onScreen: true,
      },
    });
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
    const start = new Date();

    // const today = new Date();
    // const dd = today.getDate();
    // const mm = today.getMonth()+1;
    // const yyyy = today.getFullYear();
    // const realToday = mm+' '+dd+' '+yyyy;

    // const newHour = start.toLocaleTimeString("en-GB");

    // const currentDate = new Date(realToday+' '+newHour);
    // const medocDate = new Date(formDate);
    // const timeBip = medocDate - currentDate;

    const timer = setTimeout(
      () => {
        return Bip();
      },
      // timeBip
      8000
    );
    return () => clearTimeout(timer);
  };

  const handleClick2 = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <ReactNotification />
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
              My prescriptions
            </p>
            <p
              onClick={() => handleClick2()}
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
          <div className={styles.disconnect}>
            <img
              src={discoIcon}
              alt='disconnection icon'
              className={styles.discoIcon}
            />
          </div>
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
