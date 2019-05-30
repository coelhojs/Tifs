import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createCabeleireiro } from '../actions/cabeleireiro';
import InputField from "../components/inputField";
import '../style/general.scss';

class CabeleireiroCadastro extends Component {
    onSubmit(props) {
        this.props.createCabeleireiro(props);
        
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <form className="container" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="text-center"><h1>Cadastro de Cabeleireiro</h1></div>
                <hr />
                <Field name="nome" label="Nome" component="input"
                    type="text"/>
                <Field name="sobrenome" label="Sobrenome" component="input"
                    type="text"/>
                <Field name="cnpj" label="CNPJ" component="input"
                    type="number" />
                <Field name="telefone" label="Telefone" component="input"
                    type="tel" />
                <Field name="email" label="E-mail" component="input"
                    type="email"/>
                <Field name="dataNascimento" label="Data de nascimento" component="input"
                    type="date"/>
                <Field name="senha" label="Senha" component="input"
                    type="password"/>
                <Field name="repetirSenha" label="Repita a Senha" component="input"
                    type="password"/>
                <br />
                <div className="button-group d-flex justify-content-around">
                    <button type="button" className="btn btn-success" disabled={pristine || submitting}>
                        Cadastrar
                        </button>
                    <button type="button" className="btn btn-danger" disabled={pristine || submitting}
                        onClick={reset}>
                        Cancelar
                        </button>
                </div>
                <br />
            </form >
        );
    }
}

export default reduxForm({
    form: 'cabeleireiroCadastro'
})(
    connect(null, { createCabeleireiro })(CabeleireiroCadastro)
);