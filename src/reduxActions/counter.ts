import {action, createAction} from "typesafe-actions";
import {Action} from "redux";
import {DECREMENT_COUNTER, INCREMENT_COUNTER, RESET_COUNTER} from "../constants/reduxActions";

export const increment = () => action(INCREMENT_COUNTER);
export const decrement = () => action(DECREMENT_COUNTER);
export const reset = () => action(RESET_COUNTER);

export type CounterAction = Action<typeof increment | typeof decrement | typeof reset>;
