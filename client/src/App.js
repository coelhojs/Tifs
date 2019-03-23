import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import CadastroCliente from "./components/CadastroCliente";
import Home from "./containers/Home";
import ListaClientes from "./components/ListaClientes";

class App extends Component {
    render() {
        return (
            <Router>
                <Header />
                <div>
                    <br />

                    <Route exact path="/" component={Home} />
                    <Route
                        path="/cadastroCliente"
                        component={CadastroCliente}
                    />
                    <Route path="/listaClientes" component={ListaClientes} />
                </div>
            </Router>
        );
    }
}

export default App;
