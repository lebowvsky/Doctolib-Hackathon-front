import React, { useState } from 'react';

const patients = ['uno', 'dos', 'tres', 'unpasito', 'palante', 'maria'];

const DashboardMedecin = () => {
  const [display, setDisplay] = useState(false);

  const handleClickPatients = (e) => {
    setDisplay(!display);
  };

  return (
    <>
      <h2>DashboardMedecin</h2>
      <div>Date/heure</div>
      <div>
        <button onClick={() => handleClickPatients()}>Patients</button>
        <div>{display && patients.map((patient) => patient)}</div>
      </div>
      <button>Create prescription</button>
      <input placeholder='add a medoc' />
      <button>Create patient</button>
    </>
  );
};

export default DashboardMedecin;
