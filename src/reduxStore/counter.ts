import {Action} from "redux";
import {createReducer} from "typesafe-actions";
import {DECREMENT_COUNTER, INCREMENT_COUNTER, RESET_COUNTER} from "../constants/reduxActions";
import {cloneDeep} from "../utils/common";
import {CounterAction} from "../reduxActions/counter";

export interface IStore {
    counter: number,
}

const initialStore = {
    counter: 0,
};

const actionIncrementCounter = (store: IStore, action: CounterAction): IStore => {
    const newStore = cloneDeep(store);
    newStore.counter = ++newStore.counter;
    return newStore;
};
const actionDecrementCounter = (store: IStore, action: CounterAction): IStore => {
    const newStore = cloneDeep(store);
    newStore.counter = --store.counter;
    return newStore;
};

const actionResetCounter = (store: IStore, action: CounterAction): IStore => {
    const newStore = cloneDeep(store);
    newStore.counter = 0;
    return newStore;
};

const reducerActions = {
    [INCREMENT_COUNTER]: actionIncrementCounter,
    [DECREMENT_COUNTER]: actionDecrementCounter,
    [RESET_COUNTER]: actionResetCounter,
};

export default function counterReducer(store:IStore = initialStore, action: CounterAction): IStore {
    // @ts-ignore
    const currentAction: CommonAction = reducerActions[action.type];
    if (currentAction) {
        // @ts-ignore
        return currentAction(store, action);
    }
    return store;
}

// createReducer<IStore, CounterActions>(initialStore)
//     .handleType(INCREMENT_COUNTER, actionIncrementCounter)
//     .handleType(DECREMENT_COUNTER, actionDecrementCounter)
//     .handleType(RESET_COUNTER, actionResetCounter)