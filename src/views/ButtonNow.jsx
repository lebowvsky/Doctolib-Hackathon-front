import React, { useState } from 'react';

import style from './patient.module.css';

const CURRENT_PRESCRIPTIONS = [
  { name: 'dsrfse' },
  { name: 'hserze' },
  { name: 'afeqdz' },
];

export default function ButtonNow() {
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay(!display);
  };

  const prescriptions = CURRENT_PRESCRIPTIONS.map((item) => {
    return <p key={item.name}>{item.name}</p>;
  });

  return (
    <div
      className={display ? style.open : style.close}
      onClick={() => handleDisplay()}>
      now
      {display && prescriptions}
    </div>
  );
}
