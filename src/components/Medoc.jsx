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
        <div>
          <label htmlFor='medoc'>Drug</label>
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
        <div className={styles.time}>
          <div>
            <label htmlFor='morning_medoc'>Morning</label>
            <input
              type='checkbox'
              name='morning_medoc'
              id='morning_medoc'
              onChange={morningCheck}
            />
          </div>

          <div>
            <label htmlFor='noon_medoc'>Noon</label>
            <input
              type='checkbox'
              name='noon_medoc'
              id='noon_medoc'
              onChange={noonCheck}
            />
          </div>
          <div>
            <label htmlFor='evening_medoc'>Evening</label>
            <input
              type='checkbox'
              name='evening_medoc'
              id='evening_medoc'
              onChange={eveningCheck}
            />
          </div>
        </div>
        <div>
          <label htmlFor='morning-quantity'>Morning quantity</label>
          <input
            type='number'
            name='morning-quantity'
            id='morning-quantity'
            min='0'
            max='10'
            onChange={morningQuantity}
            disabled={!isMorningTrue ? true : false}
          />
          <label htmlFor='noon-quantity'>Noon quantity</label>
          <input
            type='number'
            name='noon-quantity'
            id='noon-quantity'
            min='0'
            max='10'
            onChange={noonQuantity}
            disabled={!isNoonTrue ? true : false}
          />
          <label htmlFor='evening-quantity'>Evening quantity</label>
          <input
            type='number'
            name='evening-quantity'
            id='evening-quantity'
            min='0'
            max='10'
            onChange={eveningQuantity}
            disabled={!isEveningTrue ? true : false}
          />
        </div>
        <div>
          <label htmlFor='comment'>Comment</label>
          <input
            type='text'
            name='comment'
            id='comment'
            onChange={handleComment}
          />
        </div>
        <div>
          <div>
            <label htmlFor='date_begining'>Start date</label>
            <input
              type='date'
              name='date_begining'
              id='date_begining'
              onChange={medocDateStart}
            />
          </div>

          <label htmlFor='date_end'>End date</label>
          <input
            type='date'
            name='date_end'
            id='date_end'
            onChange={medocDateEnd}
          />
        </div>
        <button type='submit'>Ajouter</button>
      </form>
    </div>
  );
};

export default Medoc;
