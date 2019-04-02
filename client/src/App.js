import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import CadastroCabeleireiro from "./containers/CadastroCabeleireiro";
import CadastroCliente from "./containers/CadastroCliente";
import Header from "./containers/Header";
import Home from "./containers/Home";
import ListaCabeleireiro from "./containers/ListaCabeleireiros";
import ListaClientes from "./containers/ListaClientes";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Route exact path="/" component={Home} />
                    <Route path="/CadastroCliente" component={CadastroCliente} />
                    <Route path="/ListaClientes" component={ListaClientes} />
                    <Route path="/CadastroCabeleireiro" component={CadastroCabeleireiro} />}
                    <Route path="/ListaCabeleireiro" component={ListaCabeleireiro} />
                </div>
            </Router>
        );
    }
}
export default App;
