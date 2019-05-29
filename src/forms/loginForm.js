import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import inputField from "../components/inputField";
import { fetchCabeleireiro } from '../actions/cabeleireiro';
import '../style/general.scss';

let history = require("history").createBrowserHistory;

const required = value => value ? undefined : 'Campo obrigatório'

class CadastroForm extends Component {
    onSubmit(props) {
        this.props.fetchCabeleireiro(props, () => {
            history.push('/');
        });
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;

        return (
            <div className="container">
                <div className="offset-md-5 col-md-4">
                    <br />
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field name="email" label="E-mail" component={inputField} type="email" />
                        <Field name="senha" label="Senha" component={inputField} type="password" />
                        <br />
                        <div className="button-group">
                            <button className="btn btn-link">Esqueceu a senha?</button>
                            <button type="submit" className="btn btn-success shadow border-dark" disabled={pristine || submitting}>
                                Entrar
                            </button>
                        </div>
                        <br />
                    </form >
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'cadastroForm'
})(
    connect(null, { fetchCabeleireiro })(CadastroForm)
);