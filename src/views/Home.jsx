import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.module.css';
import doctorIcon from '../medias/doctor-02.svg';
import patientIcon from '../medias/patient-01.svg';
import LogoVertical from '../medias/logo-verticalG-01.svg';
import LogoHorizontal from '../medias/logo-horizontalG-02.svg';
import LogoMono from '../medias/logo-mono-03.svg';

const Home = () => {

  return(
    <div className={styles.MainDiv}>
      <div className={styles.LogoDiv}>
        <img src={LogoHorizontal} alt="App Logo" />
        <h2 className={styles.LogoText}>Louisette rase tout</h2>
      </div>
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