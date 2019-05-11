import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <div className="row d-flex justify-content-around">
                    <Link to="/Clientes" className="btn btn-dark col-5">Clientes</Link>
                    <Link to="/Servico" className="btn btn-dark col-5 offset-2">Servico</Link>
                    {/* <Link to="/Produtos" className="btn btn-dark col-3 offset-1">Produtos</Link> */}
                </div>
                <br/>
                <div className="row d-flex justify-content-around">
                    {/* <button className="btn btn-dark col-3" disabled>Cabeleireiro</button> */}
                    <button className="btn btn-dark col-5" disabled>Histórico</button>
                    <button className="btn btn-dark col-5 offset-2" disabled>Relatórios</button>
                </div>
            </div>
        );
    }
}

export default Menu;
