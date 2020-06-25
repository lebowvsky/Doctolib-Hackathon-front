import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.module.css';

const Home = () => {

  return(
    <div className={styles.MainDiv}>
      <div className={styles.LogoDiv}><h2>LOGO</h2></div>
      <div className={styles.ButtonDiv}>
        <div className={styles.ButtonSubDiv}>
          <Link to="/dashboard-medecin">
            <div className={styles.Button} />
          </Link>
          <p>Doctor</p>
        </div>
        <div className={styles.ButtonSubDiv}>
          <Link to="/dashboard-patient">
            <div className={styles.Button}/>
          </Link>
          <p>Patient</p>
        </div>
      </div>
    </div>
  );
}

export default Home;