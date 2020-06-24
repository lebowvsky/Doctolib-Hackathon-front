import React from 'react';

import style from './patient.module.css';

export default function Patient({ patient, display, onClick }) {
  return (
    <div className={style.container}>
      <div>{patient}</div>
      <div className={display ? style.open : style.close} onClick={onClick}>
        now
      </div>
      <div className={display ? style.open : style.close} onClick={onClick}>
        past
      </div>
    </div>
  );
}
