import React, { useState } from 'react';

import style from './patient.module.css';

const PAST_PRESCRIPTIONS = [
  { name: 'dsrfse' },
  { name: 'hserze' },
  { name: 'afeqdz' },
];

export default function ButtonPast() {
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay(!display);
  };

  const prescriptions = PAST_PRESCRIPTIONS.map((item) => {
    return <p key={item.name}>{item.name}</p>;
  });

  return (
    <>
      <div
        className={display ? style.open : style.close}
        onClick={() => handleDisplay()}>
        past
        {display && prescriptions}
      </div>
    </>
  );
}
