import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <div className="row d-flex justify-content-around">
                    <Link to="/Clientes" className="btn btn-dark col-3 offset-1">Clientes</Link>
                    <Link to="/Servico" className="btn btn-dark col-3 offset-1">Servico</Link>
                    <Link to="/Produtos" className="btn btn-dark col-3 offset-1">Produtos</Link>
                    <button className="btn btn-dark col-3 offset-1" disabled>Cabeleireiro</button>
                    <button className="btn btn-dark col-3 offset-1" disabled>Agenda</button>
                    <button className="btn btn-dark col-3 offset-1" disabled>Relatórios</button>
                </div>
            </div>
        );
    }
}

export default Menu;
