import { combineReducers } from "redux";
import gamesReducers from "./gamesReducer";

const rootReducer = combineReducers({
    games: gamesReducers,
});

export default rootReducer;
