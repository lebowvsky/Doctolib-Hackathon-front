import React from 'react';

import style from './patient.module.css';
import ButtonNow from './ButtonNow';
import ButtonPast from './ButtonPast';

export default function Patient({ patient }) {
  return (
    <div className={style.container}>
      <h2 className={style.patient}>{patient}</h2>
      <ButtonNow />
      <ButtonPast />
    </div>
  );
}
