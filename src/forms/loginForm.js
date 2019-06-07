import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import InputField from "../components/inputField";
import { fetchCabeleireiro } from '../actions/cabeleireiro';
import '../style/general.scss';
import { withRouter } from "react-router-dom";

let history = require("history").createBrowserHistory;

class LoginForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email : '',
            password: ''
        };
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3001/cabeleireiros/autenticar', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    window.location.href = "/Home"
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                console.error(err);
                alert('Erro com o login. Tente novamente!');
            });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Realize o login!</h1>
                <input
                    type="email"
                    name="email"
                    placeholder="Entre com email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    required
                />
                <br/>
                <br/>

                <input
                    type="password"
                    name="senha"
                    placeholder="Entre com a Senha"
                    value={this.state.senha}
                    onChange={this.handleInputChange}
                    required
                />
                <br/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}


export default reduxForm({
    form: 'loginForm'
})(
    connect(null, { fetchCabeleireiro })(LoginForm)
);