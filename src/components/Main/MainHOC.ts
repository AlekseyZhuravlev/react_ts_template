// @ts-ignore
import {connect} from "react-redux";
import {Main as Component} from "./Main";
import {RootReducer} from "../../reduxStore";
import {bindActionCreators, Dispatch} from "redux";
import {CounterAction, decrement, increment, reset} from "../../reduxActions/counter";

type SProps = {
    counter: number;
}

type DProps = {
    increment: () => void,
    decrement: () => void,
    reset: () => void,
}

export const mapStateToProps = (state: RootReducer): SProps => ({
    counter: state.counterReducer.counter
});

export const mapDispatchToProps = (dispatch: Dispatch<CounterAction>): DProps => bindActionCreators({
    increment,
    decrement,
    reset,
}, dispatch);

export const mainHOC = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);