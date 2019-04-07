import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ServicoFormPage2 = (props) => {
    const { handleSubmit, procedimentos } = props

    return (
        <form className="container" onSubmit={handleSubmit}>
            <div className="text-center"><h1>Cadastro de Serviço</h1></div>
            <div className="form-group row">
                <label className="col-3">Procedimento</label>
                <div className="col-9">
                    <Field name="procedimento" component="select">
                        {procedimentos}
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

})(ServicoFormPage2)