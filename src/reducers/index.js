import { combineReducers } from "redux";
import medecinReducer from "./reducer_medecin";
import patientReducer from "./reducer_patient";
import ordonnanceReducer from "./reducer_ordonnance";

const rootReducer = combineReducers({
  medecin: medecinReducer,
  patient: patientReducer,
  ordonnance: ordonnanceReducer,
});

export default rootReducer;
