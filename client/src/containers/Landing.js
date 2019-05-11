import React, { Component } from 'react';
import { Link, Route, Switch } from "react-router-dom";
//import { Router, Route, Switch } from "react-router-dom";
import Cadastro from "./Cadastro";
import Login from "./Login";

class Landing extends Component {
    render() {
        return (
            <div>
                <Link to="/Cadastro" className="btn btn-dark col-6 offset-3">Cadastrar</Link>
                <br />
                <Link to="/Login" className="btn btn-dark col-6 offset-3">Login</Link>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/Cadastro" component={Cadastro} />
                    <Route path="/Login" component={Login} />
                </Switch>
            </div>

        );
    }
}

export default Landing;