import React, { useState } from 'react';

import style from './patient.module.css';

export default function ButtonNow() {
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay(!display);
  };

  return (
    <div
      className={display ? style.open : style.close}
      onClick={() => handleDisplay()}>
      now
    </div>
  );
}
