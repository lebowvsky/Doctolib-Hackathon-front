const initialState = {};

const ordonnanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_ORDONNANCE_ID":
      return { ...state, id: action.id };
    default:
      return state;
  }
};

export default ordonnanceReducer;