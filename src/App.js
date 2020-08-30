import React from 'react';
import {createStore} from "redux";
import { Provider } from 'react-redux'
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {mainHOC as Main} from "./components/Main/MainHOC.ts";
import mainReducer from "./reduxStore/index.ts";

import "./App.scss";

const store = createStore(
    mainReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
              <Switch>
                  <Route exac path={"/main"} component={Main}/>
              </Switch>
          </BrowserRouter>
      </Provider>
    );
  }
};