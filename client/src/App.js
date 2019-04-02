import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import CadastroCabeleireiro from "./components/CadastroCabeleireiro";
import CadastroCliente from "./components/CadastroCliente";
import Header from "./components/Header";
import Home from "./components/Home";
import ListaCabeleireiro from "./components/ListaCabeleireiros";
import ListaClientes from "./components/ListaClientes";

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
