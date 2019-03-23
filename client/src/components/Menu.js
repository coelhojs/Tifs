import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <div className="row d-flex justify-content-around">
                    <button type="button" className="btn btn-dark col-5">
                        <Link to="/CadastroCliente">Novo cliente</Link>
                    </button>
                    <button type="button" className="btn btn-dark col-5">
                        <Link to="/CadastroCabeleireiro">Novo cabeleireiro</Link>
                    </button>
                </div>
                <br />
                <div className="row d-flex justify-content-around">
                    <button type="button" className="btn btn-dark col-5">
                        <Link to="/ListaClientes">Lista de clientes</Link>
                    </button>
                    <button type="button" className="btn btn-dark col-5">
                        <Link to="/ListaCabeleireiros">Lista de cabeleireiros</Link>
                    </button>
                </div>
            </div>
        );
    }
}

export default Menu;
