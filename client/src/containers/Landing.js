import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import { Router, Route, Switch } from "react-router-dom";

class Landing extends Component {
    render() {
        return (
            <div>
                <Link to="/Cadastro" className="btn btn-dark col-6 offset-3">Cadastrar</Link>
                <br />
                <Link to="/Login" className="btn btn-dark col-6 offset-3">Login</Link>
            </div>

        );
    }
}

export default Landing;