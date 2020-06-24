import React from 'react';

export default function Patient({ patient }) {
  return (
    <div>
      <div>{patient}</div>
      <button>now</button>
      <button>past</button>
    </div>
  );
}
