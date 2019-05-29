import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createCabeleireiro } from '../actions/cabeleireiro';
import inputField from "../components/inputField";
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
                <Field name="nome" label="Nome" component={inputField}
                    type="text"/>
                <Field name="sobrenome" label="Sobrenome" component={inputField}
                    type="text"/>
                <Field name="cnpj" label="CNPJ" component={inputField}
                    type="number" />
                <Field name="telefone" label="Telefone" component={inputField}
                    type="tel" />
                <Field name="email" label="E-mail" component={inputField}
                    type="email"/>
                <Field name="dataNascimento" label="Data de nascimento" component={inputField}
                    type="date"/>
                <Field name="senha" label="Senha" component={inputField}
                    type="password"/>
                <Field name="repetirSenha" label="Repita a Senha" component={inputField}
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