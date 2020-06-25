import { combineReducers } from "redux";
import medecinReducer from "./reducer_medecin";
import patientReducer from "./reducer_patient";

const rootReducer = combineReducers({
  medecin: medecinReducer,
  patient: patientReducer,
});

export default rootReducer;
