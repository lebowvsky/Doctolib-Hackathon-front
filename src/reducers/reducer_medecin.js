const initialState = {};

const medecinReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_MEDECIN_FIRSTNAME":
      return { ...state, nom: action.firstname };
    case "CHANGE_MEDECIN_LASTNAME":
      return { ...state, prenom: action.lastname };
    case "CHANGE_MEDECIN_ID":
      return { ...state, id: action.id };
    default:
      return state;
  }
};

export default medecinReducer;
