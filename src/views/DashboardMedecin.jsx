import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

const DashboardMedecin = () => {
  const [medocToAdd, setMedocToAdd] = useState();

  const addMedocOnHooks = (e) => {
    setMedocToAdd(e.target.value);
  };

  const handleAddMedoc = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/api/produits', { nom: medocToAdd })
      .then((res) => res.data)
      .then((res) => {
        alert('Medoc ajouté');
      })
      .catch((e) => {
        console.error(e);
        alert(`Erreur lors de l'ajout du produit : ${e.message}`);
      });
  };
  return (
    <>
      <h2>DashboardMedecin</h2>
      <div>Date/heure</div>
      <div>
        <Link to='/patients'>
          <button>Patients</button>
        </Link>
      </div>
      <button>Create prescription</button>
      <div id='medocs'>
        <form id='add_medoc' onSubmit={handleAddMedoc}>
          <div>
            <label htmlFor='new_medoc_name'>drug's name</label>
            <input
              type='text'
              name='new_medoc_name'
              id='new_medoc_name'
              placeholder="drug's name"
              onChange={addMedocOnHooks}
            />
          </div>
          <button type='submit'>Add Drug</button>
        </form>
      </div>
      <button>Create patient</button>
    </>
  );
};

export default DashboardMedecin;
