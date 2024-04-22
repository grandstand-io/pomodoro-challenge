import { combineReducers } from "@reduxjs/toolkit";


import sessionReducer from "store/slices/sessions";

const reducer = combineReducers({
  session: sessionReducer,
});

export type RootState = ReturnType<typeof reducer>;

export default reducer;
