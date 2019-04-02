import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ListaCabeleireiros from "./components/ListaCabeleireiros";
import ListaClientes from "./components/ListaClientes";
import CadastroCabeleireiro from "./containers/CadastroCabeleireiro";
import CadastroCliente from "./containers/CadastroCliente";
import Home from "./containers/Home";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />

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
