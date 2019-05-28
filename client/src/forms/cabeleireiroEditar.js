import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { editCabeleireiro, fetchCabeleireiro } from '../actions/cabeleireiro';
import inputField from "../components/inputField";
import '../style/general.scss';

let history = require("history").createBrowserHistory;

const required = value => value ? undefined : 'Campo obrigatório'
const maxEmail = max => value =>
    value && value.length > max ? `Este campo recebe no máximo ${max} caracteres` : undefined
const maxEmailTotal = maxEmail(60)
const number = value => value && isNaN(Number(value)) ? 'Este campo permite somente números' : undefined

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
                <Field name="nome" label="Nome" component={inputField}
                    type="text" validate={required}/>
                <Field name="sobrenome" label="Sobrenome" component={inputField}
                    type="text" validate={required}/>
                <Field name="cnpj" label="CNPJ" component={inputField}
                    type="number" validate={[required, number]}/>
                <Field name="telefone" label="Telefone" component={inputField}
                    type="tel" validate={[required, number]}/>
                <Field name="email" label="E-mail" component={inputField}
                    type="email" validate={[required, maxEmailTotal]}/>
                <Field name="dataNascimento" label="Data de nascimento" component={inputField}
                    type="date" validate={required}/>
                <Field name="senha" label="Senha" component={inputField}
                    type="password" validate={required}/>
                <Field name="repetirSenha" label="Repita a Senha" component={inputField}
                    type="password"validate={required} />
                <br />
                <div className="button-group d-flex justify-content-around">
                    <button type="button" className="btn btn-success" data-toggle="modal" data-target="#meuModal" disabled={pristine || submitting}>
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