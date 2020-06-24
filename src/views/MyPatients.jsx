import React from 'react';
import Patient from './Patient';

const PATIENTS = [
  { id: 1, name: 'un' },
  { id: 2, name: 'dos' },
  { id: 3, name: 'tres' },
  { id: 4, name: 'unpasito' },
  { id: 5, name: 'palante' },
  { id: 6, name: 'maria' },
];

const MyPatients = () => {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  const patients = PATIENTS.map((patient) => {
    return <Patient patient={patient.name} key={patient.id} />;
  });

  return (
    <>
      <div>{date}</div>
      <div>{time}</div>
      {patients}
    </>
  );
};

export default MyPatients;
