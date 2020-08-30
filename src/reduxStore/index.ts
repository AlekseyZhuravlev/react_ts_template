import { combineReducers } from 'redux'
import counterReducer from "./counter";

const mainReducer = combineReducers({
    counterReducer,
});

export type RootReducer = ReturnType<typeof mainReducer>;

export default mainReducer;