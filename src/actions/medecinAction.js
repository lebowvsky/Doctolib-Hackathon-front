export const changeMedecinFirstname = (firstname) => {
  return {
    type: 'CHANGE_MEDECIN_FIRSTNAME',
    firstname: firstname
  }
};

export const changeMedecinLastname = (lastname) => {
  return {
    type: 'CHANGE_MEDECIN_LASTNAME',
    lastname: lastname
  }
}

export const changeMedecinId = (id) => {
  return {
    type: 'CHANGE_MEDECIN_ID',
    id: id
  }
}