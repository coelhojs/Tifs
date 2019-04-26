import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
//import { createCliente } from '../actions/index';

let history = require("history").createBrowserHistory;

class ClienteForm extends Component {
    // onSubmit(props) {
    //     this.props.createCliente(props, () => {
    //         history.push('/');
    //     });
    // }

render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
        <form className="container" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <div className="form-group row">
                <label className="col-4">Nome</label>
                <div className="col-12">
                    <Field name="nome" className="form-control" component="input" type="text"
                        placeholder="Nome completo"
                    />
                </div>
            </div>
            <br />
            <div className="button-group d-flex justify-content-around">
                <button type="submit" className="btn btn-success" disabled={pristine || submitting}>
                    Cadastrar
                        </button>
                <button type="button" className="btn btn-danger" disabled={pristine || submitting}
                    onClick={reset}>
                    Cancelar
                        </button>
            </div>
            <br />
        </form>
    );
}
}

// reduxForm: 1st is form config
// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
export default reduxForm({
    form: 'produtoForm'
})(
    //connect(null, { createCliente })(ClienteForm)
);
