import React from 'react';
import { Field, reduxForm } from 'redux-form';
import '../style/general.scss';
import inputField from '../components/inputField';

const ServicoFormPage1 = (props) => {
    const { handleSubmit, clientes } = props

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <label className="col-2">Data</label>
                <div className="col-10">
                    <Field name="data" className="form-control" component={inputField} type="date" placeholder="" />
                </div>
            </div>

            <div className="form-row">
                <label className="col-2">Cliente</label>
                <div className="col-10">
                    <Field name="cliente" className="form-control" component="select">
                        {clientes}
                    </Field></div>
            </div>
            <div className="form-group col-12">
                <label className="text-center">Observações sobre o cliente</label>
                <Field name="anotacoes" class="form-control" component="textarea" />
            </div>
            <button type="submit" className="btn btn-success buttonService">
                Próximo
                </button>
        </form >

    )
}

export default reduxForm({
    form: 'servicoForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true

})(ServicoFormPage1)