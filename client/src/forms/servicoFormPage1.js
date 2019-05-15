import React from 'react';
import { Field, reduxForm } from 'redux-form';
import '../style/general.scss';

const ServicoFormPage1 = (props) => {
    const { handleSubmit, clientes } = props

    return (
        <form className="container" onSubmit={handleSubmit}>
            <div className="text-center"><h1>Cadastro de Serviço</h1></div>
            <hr/>
            <div className="form-group row">
                    <label className="col-2">Data</label>
                    <div className="col-10">
                        <Field name="data" className="form-control" component="input" type="date"
                            placeholder="" />
                    </div>
                </div>

            <div className="form-group row">
                    <label className="col-2">Cliente</label>
                    <div className="col-10">
                        <Field name="cliente" className="form-control" component="select">
                        {clientes}
                        </Field></div>
                </div>
            <div className="form-group textAreaService">
                <label className="col-12 text-center">Observações sobre o cliente</label>
                <div className="col-12" >
                    <Field name="anotacoes" component="textarea" />
                    {/* <Field name="observacoes" component="textarea" /> */}
                </div>
            </div>
            <button type="submit" className="btn btn-success buttonService">
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