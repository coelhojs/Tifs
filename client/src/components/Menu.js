import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <div className="row d-flex justify-content-around">
                    <Link to="/CadastroCliente">
                        <button type="button" className="btn btn-dark col-5">
                            Novo cliente
                        </button>
                    </Link>
                    <Link to="/CadastroCabeleireiro">
                        <button type="button" className="btn btn-dark col-5">
                            Novo cabeleireiro
                        </button>
                    </Link>
                </div>
                <br />
                <div className="row d-flex justify-content-around">
                    <Link to="/ListaClientes">
                        <button type="button" className="btn btn-dark col-5">
                            Lista de clientes
                        </button>
                    </Link>
                    <Link to="/ListaCabeleireiros">
                        <button type="button" className="btn btn-dark col-5">
                            Lista de cabeleireiros
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Menu;
