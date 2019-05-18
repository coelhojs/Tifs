import React, { Component } from "react";
import { Link } from "react-router-dom";

const mainContentStyle = {
    'padding': 30,
    'backgroundColor': 'rgba(100, 100, 100, 0.1)',
}

const btnStyle = {
    'padding': 10
}

class Home extends Component {
    render() {
        return (
            <main style={mainContentStyle}>
                <div className="row d-flex justify-content-around">
                    <Link to="/Servico" className="btn-lg m-2 btn-dark col-3" style={btnStyle}>
                        <img src="./img/icones/essential/svg/add-1.svg" alt="" style={{ width: 40, marginRight: 30 }} />
                        Novo Servico</Link>
                </div>
                <div className="row d-flex justify-content-around">
                    <Link to="/Clientes" className="btn-lg m-2 btn-dark col-3" style={btnStyle}>
                        <img src="./img/icones/essential/svg/users-1.svg" alt="" style={{ width: 40, marginRight: 30 }} />
                        Meus Clientes
                    </Link>
                </div>
                <div className="row d-flex justify-content-around">
                    <Link to="/Historico" className="btn-lg m-2 btn-dark col-3" style={btnStyle}>
                        <img src="./img/icones/essential/svg/hourglass-1.svg" alt="" style={{ width: 40, marginRight: 30 }} />
                        Histórico de serviços</Link>
                </div>
                <div className="row d-flex justify-content-around">
                    <Link to="/Relatorios" className="btn-lg m-2 btn-dark col-3" style={btnStyle}>
                        <img src="./img/icones/essential/svg/notebook-1.svg" alt="" style={{ width: 40, marginRight: 30 }} />
                        Relatórios</Link>
                </div>
                <div className="row d-flex justify-content-around">
                    <Link to="/Produtos" className="btn-lg m-2 btn-dark col-3" style={btnStyle}>
                        <img src="./img/icones/essential/svg/produtos.svg" alt="" style={{ width: 40, marginRight: 30 }} />
                        Produtos</Link>
                </div>
                <div className="text-center" style={{ marginTop: 80 }}>
                    <a href="https://www.facebook.com/bootsnipp"><i id="social-fb" className="fa fa-facebook-square fa-3x social"></i></a>
                    <a href="https://twitter.com/bootsnipp"><i id="social-tw" className="fa fa-twitter-square fa-3x social"></i></a>
                    <a href="https://plus.google.com/+Bootsnipp-page"><i id="social-gp" className="fa fa-google-plus-square fa-3x social"></i></a>
                    <a href="mailto:bootsnipp@gmail.com"><i id="social-em" className="fa fa-envelope-square fa-3x social"></i></a>
                </div>
            </main>
        );
    }
}


export default Home;