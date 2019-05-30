import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { editCabeleireiro, fetchCabeleireiro } from '../actions/cabeleireiro';
import InputField from "../components/inputField";
import '../style/general.scss';

let history = require("history").createBrowserHistory;

class CabeleireiroEditar extends Component {
    onSubmit(formValues) {
        this.props.onSubmit((formValues), () => {
            history.push('/');
        });
    }
    // userDelete() {
    //     this.props.deleteCabeleireiro(this.props.match.params.id);
    // }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <form className="container" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="text-center"><h1>Editar perfil</h1></div>
                <hr />
                <Field name="nome" label="Nome" component={InputField}
                    type="text"/>
                <Field name="sobrenome" label="Sobrenome" component={InputField}
                    type="text"/>
                <Field name="cnpj" label="CNPJ" component={InputField}
                    type="number" />
                <Field name="telefone" label="Telefone" component={InputField}
                    type="tel" />
                <Field name="email" label="E-mail" component={InputField}
                    type="email"/>
                <Field name="dataNascimento" label="Data de nascimento" component={InputField}
                    type="date"/>
                <Field name="senha" label="Senha" component={InputField}
                    type="password"/>
                <Field name="repetirSenha" label="Repita a Senha" component={InputField}
                    type="password" />
                <br />
                <div className="button-group d-flex justify-content-around">
                    <button type="button" className="btn btn-success"  disabled={pristine || submitting}>
                        Cadastrar
                        </button>
                    <button type="button" className="btn btn-danger" disabled={pristine || submitting}
                        onClick={reset}>
                        Cancelar
                        </button>
                </div>
                <br />
                {/* <button type="button" class="btn btn-danger" onclick={this.userDelete()}>Danger</button> */}
            </form >
        );
    }
}

export default reduxForm({
    form: 'cabeleireiroEditar'
})(
    connect(null, { fetchCabeleireiro, editCabeleireiro })(CabeleireiroEditar)
);