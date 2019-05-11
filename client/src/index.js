import "bootstrap";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import App from "./App";
import Landing from "./containers/Landing";
import Clientes from "./containers/Clientes";
import Produtos from "./containers/Produtos"
import Servico from "./containers/Servico";
import Header from "./containers/Header";
import Home from "./containers/Home";
import Cadastro from "./containers/Cadastro";
import Login from "./containers/Login";
import reducers from "./reducers";
import history from './history'
import * as serviceWorker from "./serviceWorker";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App>
                <Header />
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/Home" component={Home} />
                    <Route path="/Clientes" component={Clientes} />
                    <Route path="/Produtos" component={Produtos} />
                    <Route path="/Servico" component={Servico} />
                    <Route path="/Cadastro" component={Cadastro} />
                    <Route path="/Login" component={Login} />
                </Switch>
            </App>
        </Router>
    </Provider>,
    document.querySelector("#root")
);

serviceWorker.unregister();
