export const changePatientFirstname = (firstname) => {
  return {
    type: "CHANGE_PATIENT_FIRSTNAME",
    firstname: firstname,
  };
};

export const changePatientLastname = (lastname) => {
  return {
    type: "CHANGE_PATIENT_LASTNAME",
    lastname: lastname,
  };
};

export const changePatientId = (id) => {
  return {
    type: "CHANGE_PATIENT_ID",
    id: id,
  };
};
