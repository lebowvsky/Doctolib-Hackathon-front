import React from 'react';

import styles from './Medoc.module.css';

const Medoc = ({
  medocAll,
  handleSubmitCommande,
  handleSelectMedoc,
  morningCheck,
  noonCheck,
  eveningCheck,
  isMorningTrue,
  isNoonTrue,
  isEveningTrue,
  morningQuantity,
  noonQuantity,
  eveningQuantity,
  handleComment,
  medocDateStart,
  medocDateEnd,
}) => {
  return (
    <div>
      <form className={styles.MainContainer} onSubmit={handleSubmitCommande}>
        <div className={styles.Row}>
          <label htmlFor='medoc'>
            <h3 className={styles.title}>Or select one</h3>
          </label>
          <select
            className={styles.Form}
            name='medoc'
            id='medoc'
            onChange={handleSelectMedoc}>
            {medocAll.map((medoc) => {
              return <option value={`${medoc.id}`}>{`${medoc.nom}`}</option>;
            })}
          </select>
        </div>
        <div className={styles.timeQuantDiv}>
          <div className={styles.time}>
            <div>
              <label htmlFor='morning_medoc'>Morning</label>
              <input
                className={styles.CheckBox}
                type='checkbox'
                name='morning_medoc'
                id='morning_medoc'
                onChange={morningCheck}
              />
            </div>

            <div>
              <label htmlFor='noon_medoc'>Noon</label>
              <input
                className={styles.CheckBox}
                type='checkbox'
                name='noon_medoc'
                id='noon_medoc'
                onChange={noonCheck}
              />
            </div>
            <div>
              <label htmlFor='evening_medoc'>Evening</label>
              <input
                className={styles.CheckBox}
                type='checkbox'
                name='evening_medoc'
                id='evening_medoc'
                onChange={eveningCheck}
              />
            </div>
          </div>
          <div className={styles.quantityBox}>
            <div>
              <label htmlFor='morning-quantity'>Morning quantity </label>
              <input
                className={styles.FormQuantity}
                type='number'
                name='morning-quantity'
                id='morning-quantity'
                min='0'
                max='10'
                onChange={morningQuantity}
                disabled={!isMorningTrue ? true : false}
              />
            </div>
            <div>
              <label htmlFor='noon-quantity'>Noon quantity </label>
              <input
                className={styles.FormQuantity}
                type='number'
                name='noon-quantity'
                id='noon-quantity'
                min='0'
                max='10'
                onChange={noonQuantity}
                disabled={!isNoonTrue ? true : false}
              />
            </div>
            <div>
              <label htmlFor='evening-quantity'>Evening quantity </label>
              <input
                className={styles.FormQuantity}
                type='number'
                name='evening-quantity'
                id='evening-quantity'
                min='0'
                max='10'
                onChange={eveningQuantity}
                disabled={!isEveningTrue ? true : false}
              />
            </div>
          </div>
          <div className={styles.formContainer}>
            <label htmlFor='comment'>Comment</label>
            <input
              className={styles.FormText}
              type='text'
              name='comment'
              id='comment'
              onChange={handleComment}
            />
          </div>
        </div>
        <div className={styles.dateContainer}>
          <div>
            <label htmlFor='date_begining'>Start date</label>
            <input
              className={styles.FormDate}
              type='date'
              name='date_begining'
              id='date_begining'
              onChange={medocDateStart}
            />
          </div>
          <div>
            <label htmlFor='date_end'>End date</label>
            <input
              className={styles.FormDate}
              type='date'
              name='date_end'
              id='date_end'
              onChange={medocDateEnd}
            />
          </div>
        </div>
        <button className={styles.ValidatePrescription} type='submit'>
          Add new drug on prescription
        </button>
      </form>
    </div>
  );
};

export default Medoc;
