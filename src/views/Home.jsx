import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.module.css';

const Home = () => {

  return(
    <div className={styles.MainDiv}>
      <h2>LOGO</h2>
      <div className={styles.ButtonDiv}>
        <Link to="/dashboard-medecin">
          <div className={styles.Button}>
            I am a doctor
          </div>
        </Link>
        <Link to="/dashboard-patient">
          <div className={styles.Button}>
            I am a patient
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;