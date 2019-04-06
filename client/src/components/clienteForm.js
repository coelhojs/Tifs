import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createCliente } from '../actions/index';
let history = require("history").createBrowserHistory;
class ClienteForm extends Component {

    onSubmit(props) {
        this.props.createCliente(props, () => {
            history.push('/');
        });

    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <form className="container" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="form-group row">
                    <label className="col-3">Nome</label>
                    <div className="col-9">
                        <Field name="nome" component="input" type="text" placeholder="Nome completo" />
                    </div>
                </div>
                <div>
                    <label>Sexo</label>
                    <div>
                        <label>
                            <Field name="sexo" component="input" type="radio" value="male" /> Masculino
                    </label>
                        <label>
                            <Field name="sexo" component="input" type="radio" value="female" /> Feminino
                    </label>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-3">CPF</label>
                    <div className="col-9">
                        <Field name="cpf" component="input" type="text" placeholder="" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-3">Data de Nascimento</label>
                    <div className="col-9">
                        <Field name="dataNascimento" component="input" type="text" placeholder="" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-3">Telefone</label>
                    <div className="col-9">
                        <Field name="telefone" component="input" type="text" placeholder="" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-3">E-mail</label>
                    <div className="col-9">
                        <Field name="email" component="input" type="email" placeholder="" />
                    </div>
                </div>
                <div className="form-group">
                    <label>Você já teve episódios de alergia a algum produto cosmético?</label>
                    <div>
                        <label>
                            <Field name="alergias" component="input" type="radio" value="true" /> Sim
                    </label>
                        <label>
                            <Field name="alergias" component="input" type="radio" value="false" /> Não
                    </label>
                    </div>
                </div>
                <div className="form-group">
                    <label>Você está em período de gravidez?</label>
                    <div>
                        <label>
                            <Field name="gestante" component="input" type="radio" value="true" /> Sim
                    </label>
                        <label>
                            <Field name="gestante" component="input" type="radio" value="false" /> Não
                    </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-success" disabled={pristine || submitting} >
                    Cadastrar
                </button>
                <button type="button" className="btn btn-danger" disabled={pristine || submitting} onClick={reset}>
                    Cancelar
                </button>
            </form >
        );
    }
}

// reduxForm: 1st is form config
// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
export default reduxForm({
    form: 'clienteForm'
})(
    connect(null, { createCliente })(ClienteForm)
);
