import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import InputField from '../components/inputField';
import MaterialUtilizado from "../components/materialUtilizado";

const ServicoFormPage2 = (props) => {
    const { handleSubmit, previousPage, servicos, fields } = props

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <label className="col-3">Serviço</label>
                <div className="col-9">
                    <Field name="nome" className="form-control" component="select">
                        <option defaultValue>Selecione um serviço</option>
                        <option value="Escova">Escova</option>
                        <option value="Corte">Corte</option>
                        <option value="Coloração">Coloração</option>
                        <option value="Selagem">Selagem</option>
                        <option value="Mechas">Mechas</option>
                    </Field>
                </div>
            </div>
            <FieldArray name="materiais" component={MaterialUtilizado} />
            <div className="button-group d-flex justify-content-around">
                <button type="button" className="btn btn-secondary" onClick={previousPage}>
                    Voltar
                </button>
                <button type="submit" className="btn btn-success"  >
                    Concluído
                </button>
            </div>
        </form >
    )
}

export default reduxForm({
    form: 'servicoForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
})(ServicoFormPage2)