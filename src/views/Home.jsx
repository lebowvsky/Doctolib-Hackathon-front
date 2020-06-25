import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.module.css';
import doctorIcon from '../medias/doctor-02.svg';
import patientIcon from '../medias/patient-01.svg';

const Home = () => {

  return(
    <div className={styles.MainDiv}>
      <div className={styles.LogoDiv}><h2>LOGO</h2></div>
      <div className={styles.ButtonDiv}>
        <div className={styles.ButtonSubDiv}>
          <Link to="/dashboard-medecin">
            <div className={styles.Button}>
              <img class={styles.ButtonImg} src={doctorIcon} alt="Doctor icon"/> 
            </div>
          </Link>
          <p>Doctor</p>
        </div>
        <div className={styles.ButtonSubDiv}>
          <Link to="/dashboard-patient">
            <div className={styles.Button}>
              <img className={styles.ButtonImg} src={patientIcon} alt="Patient icon"/>
            </div>
          </Link>
          <p>Patient</p>
        </div>
      </div>
    </div>
  );
}

export default Home;