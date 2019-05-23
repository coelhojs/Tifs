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
            <form className="container" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="text-center"><h1>Login</h1></div>
                <hr />
                <Field name="email" label="E-mail" component={inputField}
                    type="email" validate={required}/>
                <Field name="senha" label="Senha" component={inputField}
                    type="password" validate={required}/>
                <br />
                <div className="button-group d-flex justify-content-around">
                    <button type="submit" className="btn btn-success" disabled={pristine || submitting}>
                        Entrar
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

// reduxForm: 1st is form config
// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
export default reduxForm({
    form: 'cadastroForm'
})(
    connect(null, { fetchCabeleireiro })(CadastroForm)
);