import ReactDOM from "react-dom";
import React from 'react';
import {createStore} from "redux";
import { Provider } from 'react-redux'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import request from "superagent";

import {counterHOC as Counter} from "./components/Counter/CounterHOC.ts";
import {GlobalError} from "./components/GlobalError/GlobalError";
import {GlobalLoader} from "./components/GlobalLoader/GlobalLoader";
import {MainPage} from "./components/MainPage/MainPage";

import mainReducer from "./reduxStore/index.ts";
import {getHost} from "./utils/commonUtils";

import "./App.scss";

const store = createStore(
    mainReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default class App extends React.Component {

    componentDidMount() {
        this.fetchGreetings();
    }

    componentDidCatch(error, errorInfo) {

        this.renderErrorPage(error);
    }

    fetchGreetings = () => {
        request.get(getHost() + "main")
            .then( response => {
                console.log(response.text);
            })
    }

    renderErrorPage = (err) => {
        // const GlobalError = await import("./components/GlobalError/GlobalError.tsx");
        console.error(err);
        ReactDOM.render(
            <GlobalError message={"Sorry! It was Unpredictable error, look at console..."}/>
            ,document.getElementById('root'));
    }

    render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
              <React.Suspense fallback={<GlobalLoader/>}>
                  <MainPage />
              </React.Suspense>
          </BrowserRouter>
      </Provider>
    );
  }
};