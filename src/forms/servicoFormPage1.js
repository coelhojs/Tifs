import React from 'react';
import { createServico, fetchServicos } from '../actions/servico';
import { Field, reduxForm } from 'redux-form';
import '../style/general.scss';
import InputField from '../components/inputField';

const ServicoFormPage1 = (props) => {
    const { handleSubmit, clientes } = props

    return (
        <form onSubmit={handleSubmit}>
            <InputField
                name="data" type="date" label="Data"
                labelClasses="col-2" inputClasses="col-10" formGroupClasses="form-row" />
            <div className="form-row">
                <label className="col-2">Cliente</label>
                <div className="col-10">
                    <Field name="cliente" className="form-control" component="select">
                        <option key={0}>Selecione um(a) cliente</option>
                        {clientes}
                    </Field></div>
            </div>
            <div className="form-group col-12">
                <label className="text-center">Observações sobre o cliente</label>
                <Field name="anotacoes" className="form-control" component="textarea" />
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