import "bootstrap";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import ReduxPromise from "redux-promise";
import App from "./App";
import reducers from "./reducers";
import * as serviceWorker from "./serviceWorker";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>,
    document.querySelector("#root")
);

serviceWorker.unregister();
