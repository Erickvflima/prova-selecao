import { combineReducers } from "@reduxjs/toolkit";

import personDataReducer from "./ducks/PersonData";

const rootReducer = combineReducers({
  personData: personDataReducer,
});

export default rootReducer;
