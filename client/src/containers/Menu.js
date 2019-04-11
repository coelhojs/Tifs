import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <div className="row d-flex justify-content-around">
                    <Link to="/Clientes" className="btn btn-dark col-offset-2 col-4 col-md-2">Clientes</Link>
                    <Link to="/Anamnese" className="btn btn-dark col-offset-2 col-4 col-md-2">Anamnese</Link>
                </div>
            </div>
        );
    }
}

export default Menu;
