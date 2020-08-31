import React from 'react';

import "./counter.scss";
import {mapDispatchToProps, mapStateToProps} from "./CounterHOC";

export interface IProps {
}

interface IState {
}

type Props = ReturnType<typeof mapStateToProps> &
             ReturnType<typeof mapDispatchToProps> &
             IProps;

export class Counter extends React.Component<Props, IState> {

    state = {
    }

    render() {
        const { increment, decrement, reset, counter } = this.props;
        return (
            <div className="main__container">
                <div className="main__counter-wrapper">
                    <nav>
                        <button id="increment-counter" onClick={() => increment()}>increment</button>
                        <button id="decrement-counter" onClick={() => decrement()}>decrement</button>
                        <button id="reset-counter" onClick={() => reset()}>reset</button>
                    </nav>
                    <div className="main__counter-element">{counter}</div>
                </div>
            </div>
        );
    }
}