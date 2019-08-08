import {combineReducers} from "redux"
import errorReducer from "./errorReducer";
import compteReducer from "./compteReducer";

export default combineReducers(
    {
        errors:errorReducer,
        compte: compteReducer
    }
);