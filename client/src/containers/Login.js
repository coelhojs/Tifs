import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Field, reduxForm } from 'redux-form';

class Login extends Component {
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <div>
                {/* /                <form className="container" onSubmit={handleSubmit(this.onSubmit.bind(this))}> */}
                <form className="container">
                    <div className="text-center"><h1>Login</h1></div>
                    <hr />
                    <div className="form-group row">
                        <label className="col-2">E-mail</label>
                        <div className="col-10">
                            <Field name="nome" className="form-control" component="input" type="text"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-2">Senha</label>
                        <div className="col-10">
                            <Field name="sexo" className="form-control" component="input" type="password">
                            </Field></div>
                    </div>
                    <br />
                    <div className="button-group d-flex justify-content-around">
                        {/* <button type="submit" className="btn btn-success" disabled={pristine || submitting}>
                            Entrar
                        </button> */}
                        <Link to="/Home" className="btn btn-success">Entrar</Link>
                        <button type="button" className="btn btn-danger" disabled={pristine || submitting}
                            onClick={reset}>
                            Cancelar
                        </button>
                    </div>
                    <br />
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'loginForm'
})(
    connect(null, {})(Login)
);
