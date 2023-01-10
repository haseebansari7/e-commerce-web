import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./CounterReducer/counterReducer";

const rootReducer = combineReducers({
    counterReducer:counterReducer,
})

export default rootReducer