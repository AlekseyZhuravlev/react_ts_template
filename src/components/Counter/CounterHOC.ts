// @ts-ignore
import {connect} from "react-redux";
import {Counter as Component} from "./Counter";
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

export const counterHOC = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);