import "bootstrap";
import React from "react";
import { pushRotate as Menu } from "react-burger-menu";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Link, Router } from "react-router-dom";
import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import App from "./App";
import history from './history';
import reducers from "./reducers";
import * as serviceWorker from "./serviceWorker";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Menu pageWrapId={"page-wrap"} >
                <Link to="/Editar" className="menu-item">Editar</Link>
                <Link to="/Ajuda" className="menu-item">Ajuda</Link>
                <Link to="/Termos" className="menu-item">Termos</Link>
            </Menu>
            <App />
        </Router>
    </Provider>,
    document.querySelector("#root")
);

serviceWorker.unregister();