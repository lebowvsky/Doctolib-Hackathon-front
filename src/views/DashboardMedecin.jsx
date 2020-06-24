import React from 'react';
import { Link } from 'react-router-dom';

const DashboardMedecin = () => {
  return (
    <>
      <h2>DashboardMedecin</h2>
      <div>Date/heure</div>
      <div>
        <Link to='/patients'>
          <button>Patients</button>
        </Link>
      </div>
      <button>Create prescription</button>
      <input placeholder='add a medoc' />
      <button>Create patient</button>
    </>
  );
};

export default DashboardMedecin;
