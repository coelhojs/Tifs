import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <main className="container-fluid">
                <div className="row d-flex justify-content-around">
                    <Link to="/Servico" className="btn m-2 btn-dark col-5">Novo Servico</Link>
                    <Link to="/Clientes" className="btn m-2 btn-dark col-5">Meus Clientes</Link>
                    <Link to="/Historico" className="btn m-2 btn-dark col-5">Histórico de serviços</Link>
                    <Link to="/Relatorios" className="btn m-2 btn-dark col-5">Relatórios</Link>
                    <Link to="/Produtos" className="btn m-2 btn-dark col-5">Produtos</Link>
                </div>
            </main>
        );
    }
}

export default Home;