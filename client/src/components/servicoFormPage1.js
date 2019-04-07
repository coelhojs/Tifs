import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ServicoFormPage1 = (props) => {
    const { handleSubmit, initialValues, clientes } = props

    return (
        <form className="container" onSubmit={handleSubmit}>
            <div className="text-center"><h1>Cadastro de Serviço</h1></div>
            <div className="form-group">
                <label className="col-3">Data</label>
                <div className="col-9">
                    <Field name="data" component="input" type="date" />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-3">Cliente</label>
                <div className="col-9">
                    <Field name="cliente" component="select">
                        {clientes}
                    </Field>
                </div>
            </div>
            <div className="form-group">
                <label className="col-3">Observações</label>
                <div className="col-9">
                    <Field name="observacoes" component="textarea" />
                </div>
            </div>
            <button type="submit" className="btn btn-success" >
                Próximo
                </button>
        </form >

    )
}

export default reduxForm({
    form: 'servicoForm',                 // <------ same form name
    destroyOnUnmount: false,        // <------ preserve form data
    forceUnregisterOnUnmount: true  // <------ unregister fields on unmount

})(ServicoFormPage1)