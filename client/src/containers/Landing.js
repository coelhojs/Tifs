import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import { Router, Route, Switch } from "react-router-dom";

class Landing extends Component {
    render() {
        return (
            <div className="row d-flex justify-content-around">
                <Link to="/Cadastro" className="btn m-2 btn-dark col-2">Cadastrar</Link>
                <Link to="/Login" className="btn m-2 btn-dark col-2">Login</Link>
            </div>

        );
    }
}

export default Landing;