import React, { useState } from "react";
import axios from "axios";
import styles from "./DashboardPatient.module.css";
import Clock from "./Clock";

const DashboardPatient = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.topPage}>
        <h2>My Dashboard</h2>
        <Clock />
      </div>
      <div
        onClick={() => handleClick()}
        className={isOpen ? styles.open : styles.close}
      >
        <div
          className={
            isOpen
              ? styles.prescriptionInfosOpen
              : styles.prescriptionInfosClose
          }
        >
          <p className={styles.prescriptionTitle}>My prescriptions</p>
          <p className={styles.prescriptionNumber}>3</p>
        </div>
        <div className={isOpen ? styles.contentOpen : styles.contentClose}>
          <div>
            <p className={styles.prescriptionName}>Ordonnance 1</p>
            <p className={styles.prescriptionDescription}>
              petite description pour voir de quoi ça parle
            </p>
          </div>
          <div>
            <p className={styles.prescriptionName}>Ordonnance 2</p>
            <p className={styles.prescriptionDescription}>petite description</p>
          </div>
          <div>
            <p className={styles.prescriptionName}>Ordonnance 3</p>
            <p className={styles.prescriptionDescription}>petite description</p>
          </div>
          <div>
            <p className={styles.prescriptionName}>Ordonnance 4</p>
            <p className={styles.prescriptionDescription}>petite description</p>
          </div>
        </div>
      </div>
      <div onClick='' className={styles.drugHistory}>
        <p>My drug history</p>
        <p className={styles.subtitleEmergency}>In case of emergency</p>
      </div>
    </div>
  );
};

export default DashboardPatient;
