import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import InputField from "../components/inputField";
import { fetchCabeleireiro } from '../actions/cabeleireiro';
import '../style/general.scss';

let history = require("history").createBrowserHistory;

class CadastroForm extends Component {
    onSubmit(props) {
        this.props.fetchCabeleireiro(props, () => {
            history.push('/');
        });
    }

    render() {
        const { handleSubmit, pristine, submitting } = this.props;

        return (
            <div className="container">
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <InputField
                        name="email" type="email"
                        label="E-mail" labelClasses="col-4" inputClasses="col-8" formGroupClasses="form-row" />
                    <InputField name="senha" type="password"
                        label="Senha" labelClasses="col-4" inputClasses="col-8" formGroupClasses="form-row" />
                    <br />
                    <div className="button-group">
                        <button className="btn btn-link">Esqueceu a senha?</button>
                        <button type="submit" className="btn btn-success shadow border-dark" disabled={pristine || submitting}>
                            Entrar
                            </button>
                    </div>
                </form >
            </div>
        );
    }
}

export default reduxForm({
    form: 'cadastroForm'
})(
    connect(null, { fetchCabeleireiro })(CadastroForm)
);