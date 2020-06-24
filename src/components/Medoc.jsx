import React from "react";

const Medoc = ({
  handleSubmitCommande,
  handleSelectMedoc,
  morningCheck,
  noonCheck,
  eveningCheck,
  medocDateStart,
  medocDateEnd,
}) => {
  return (
    <form id="commande" onSubmit={handleSubmitCommande}>
      <label htmlFor="medoc">Drug</label>
      <select name="medoc" id="medoc" onChange={handleSelectMedoc}>
        <option value="medoc1">medoc 1</option>
        <option value="medoc2">medoc 2</option>
        <option value="medoc3">medoc 3</option>
      </select>
      <div>
        <label htmlFor="morning_medoc">Morning</label>
        <input
          type="checkbox"
          name="morning_medoc"
          id="morning_medoc"
          onChange={morningCheck}
        />
        <label htmlFor="noon_medoc">Noon</label>
        <input
          type="checkbox"
          name="noon_medoc"
          id="noon_medoc"
          onChange={noonCheck}
        />
        <label htmlFor="evening_medoc">Evening</label>
        <input
          type="checkbox"
          name="evening_medoc"
          id="evening_medoc"
          onChange={eveningCheck}
        />
      </div>
      <div>
        <label htmlFor="date_begining">Start date</label>
        <input
          type="date"
          name="date_begining"
          id="date_begining"
          onChange={medocDateStart}
        />
        <label htmlFor="date_end">End date</label>
        <input
          type="date"
          name="date_end"
          id="date_end"
          onChange={medocDateEnd}
        />
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default Medoc;
