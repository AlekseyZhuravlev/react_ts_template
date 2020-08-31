import React from 'react';
import {createStore} from "redux";
import { Provider } from 'react-redux'
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {counterHOC as Counter} from "./components/Counter/CounterHOC.ts";
import mainReducer from "./reduxStore/index.ts";

import "./App.scss";
import {MainPage} from "./components/MainPage/MainPage";

const store = createStore(
    mainReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
              <MainPage/>
              <Switch>
                  <Route exac path={"/counter"} component={Counter}/>
              </Switch>
          </BrowserRouter>
      </Provider>
    );
  }
};