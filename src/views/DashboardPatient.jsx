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
        <p className={styles.prescriptionTitle}>My prescriptions</p>
        <p className={styles.prescriptionNumber}>3</p>
      </div>
      <div onClick='' className={styles.drugHistory}>
        <p>My drug history</p>
        <p className={styles.subtitleEmergency}>In case of emergency</p>
      </div>
    </div>
  );
};

export default DashboardPatient;
