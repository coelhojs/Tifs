import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Cadastro from "./containers/Cadastro";
import Clientes from "./containers/Clientes";
import Editar from "./containers/EditarCadastro";
import Header from "./containers/Header";
import Home from "./containers/Home";
import Landing from "./containers/Landing";
import Login from "./containers/Login";
import Produtos from "./containers/Produtos";
//import Relatorios from "./containers/Relatorios";
import Servico from "./containers/Servico";

class App extends Component {

    render() {
        return (
            <div id="page-wrap">
                <Header />
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/Home" component={Home} />
                    <Route path="/Clientes" component={Clientes} />
                    <Route path="/Produtos" component={Produtos} />
                    <Route path="/Servico" component={Servico} />
                    <Route path="/Editar/:id" component={Editar} />
                    <Route path="/Cadastro" component={Cadastro} />
                    <Route path="/Login" component={Login} />
                    {/* <Route path="/Relatorios" component={Relatorios} /> */}
                </Switch>
            </div >
        );
    }
}
export default App;