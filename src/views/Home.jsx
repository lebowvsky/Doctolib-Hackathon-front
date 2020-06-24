import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.module.css';

const Home = () => {
  const [hoverButton, setHover] = useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return(
    <div className={styles.MainDiv}>
      <h2>LOGO</h2>
      <div className={styles.ButtonDiv}>
        <Link to="/dashboard-medecin">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={hoverButton ? styles.ButtonClicked : styles.Button}>
              I am a doctor
          </div>
        </Link>
        <Link to="/dashboard-patient">
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={styles.ButtonClicked}>
              I am a patient
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;