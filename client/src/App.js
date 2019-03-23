import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import CadastroCliente from "./components/CadastroCliente";
import Home from "./containers/Home";
import ListaClientes from "./components/ListaClientes";
import CadastroCabeleireiro from "./components/CadastroCabeleireiro";
import ListaCabeleireiros from "./components/ListaCabeleireiros";

class App extends Component {
    render() {
        return (
            <Router>
                <Header />
                <div>
                    <br />

                    <Route exact path="/" component={Home} />
                    <Route path="/CadastroCliente" component={CadastroCliente} />
                    <Route path="/ListaClientes" component={ListaClientes} />
                    <Route path="/CadastroCabeleireiro" component={CadastroCabeleireiro} />
                    <Route path="/ListaCabeleireiros" component={ListaCabeleireiros} />
                </div>
            </Router>
        );
    }
}

export default App;
