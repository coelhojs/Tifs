import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { editCabeleireiro, fetchCabeleireiro } from '../actions/cabeleireiro';
import inputField from "../components/inputField";
import '../style/general.scss';

let history = require("history").createBrowserHistory;

class CabeleireiroEditar extends Component {
    onSubmit(formValues) {
        this.props.onSubmit((formValues), () => {
            history.push('/');
        });
    }
    userDelete() {
        this.props.deleteCabeleireiro(this.props.match.params.id);
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <form className="container" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="text-center"><h1>Editar perfil</h1></div>
                <hr />
                <Field name="nome" label="Nome" component={inputField}
                    type="text" />
                <Field name="sobrenome" label="Sobrenome" component={inputField}
                    type="text" />
                <Field name="cnpj" label="CNPJ" component={inputField}
                    type="number" />
                <Field name="telefone" label="Telefone" component={inputField}
                    type="tel" />
                <Field name="email" label="E-mail" component={inputField}
                    type="email" />
                <Field name="dataNascimento" label="Data de nascimento" component={inputField}
                    type="date" />
                <Field name="senha" label="Senha" component={inputField}
                    type="password" />
                <Field name="repetirSenha" label="Repita a Senha" component={inputField}
                    type="password" />
                <br />
                <div className="modal fade" id="meuModal" tabindex="-1" role="dialog" aria-labelledby="meuModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h4 className="modal-title text-center" id="meuModalLabel">Confirmação de cadastro</h4>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>      
                            </div>
                            <div className="modal-body">
                               Deseja finalizar a edição do cabeleireiro: 
                    </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Fechar</button>
                                <button type="submit" className="btn btn-primary">Concluir cadastro</button>
                            </div>
                        </div>
                    </div>
                </div>            
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
                <button type="button" class="btn btn-danger" onclick={this.userDelete()}>Danger</button>
            </form >
        );
    }
}

export default reduxForm({
    form: 'cabeleireiroEditar'
})(
    connect(null, { fetchCabeleireiro, editCabeleireiro })(CabeleireiroEditar)
);