import React, { useState } from 'react';

import styles from './Home.module.css';

const Home = () => {

  const [showDoctors, setShowDoctors] = useState(false);
  const [showPatients, setShowPatients] = useState(false);

  const handleShowDoctors = () => {
    setShowDoctors(!showDoctors);
    setShowPatients(false);
  }

  const handleShowPatients = () => {
    setShowPatients(!showPatients);
    setShowDoctors(false);
  }

  return(
    <div className={styles.MainDiv}>
      <h2>LOGO</h2>
      <div className={styles.ButtonDiv}>
        <div className={styles.intraButtonDiv}>
          <button onClick={() => handleShowDoctors()} className={styles.Button}>I am a doctor</button>
          <div className={showDoctors ? styles.ShowDiv : styles.HideDiv}>
            <label for="doctor-select">Choose</label>
            <select name="doctors" id="doctor-select">
              <option value="Clark Kent">Clark Kent</option>
            </select>
          </div>
        </div>
        <div className={styles.intraButtonDiv}>
          <button onClick={() => handleShowPatients()} className={styles.Button}>I am a patient</button>
          <div className={showPatients ? styles.ShowDiv : styles.HideDiv}>
            <label for="patient-select">Choose</label>
            <select name="patients" id="patient-select">
              <option value="Blanche Gardin">Blanche Gardin</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;