import React, { useEffect } from 'react';

const PATIENTS = ['uno', 'dos', 'tres', 'unpasito', 'palante', 'maria'];

const MyPatients = () => {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  return (
    <>
      <div>{date}</div>
      <div>{time}</div>
      <div>{PATIENTS.map((patient) => patient)}</div>
    </>
  );
};

export default MyPatients;
