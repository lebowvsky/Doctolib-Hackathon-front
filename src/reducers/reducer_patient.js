const initialState = {};

const patientReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_PATIENT_FIRSTNAME":
      return { ...state, nom: action.firstname };
    case "CHANGE_PATIENT_LASTNAME":
      return { ...state, prenom: action.lastname };
      case "CHANGE_PATIENT_ID":
      return { ...state, id: action.id };
    default:
      return state;
  }
}

export default patientReducer;