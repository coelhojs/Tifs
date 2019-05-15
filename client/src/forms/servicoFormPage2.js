import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import MaterialUtilizado from "../components/materialUtilizado";

const ServicoFormPage2 = (props) => {
    const { handleSubmit, previousPage, servicos } = props

    return (
        <form className="container" onSubmit={handleSubmit}>
            <div className="text-center"><h1>Cadastro de Serviço</h1></div>
            <div className="form-group row">
                <label className="col-3">Serviço</label>
                <div className="col-9">
                    {/* <Field name="servico" component="select"> */}
                    <Field name="nome" component="select">
                        {servicos}
                    </Field>
                </div>
            </div>
            <div className="form-group">
                <div className="col-12">
                    <FieldArray name="materiais" items={servicos} component={MaterialUtilizado} />
                </div>
            </div>
            <button type="button" className="btn btn-secondary" onClick={previousPage}>
                Voltar
                </button>
            <button type="submit" className="btn btn-success" >
                Concluído
                </button>
        </form >

    )
}

export default reduxForm({
    form: 'servicoForm',                 // <------ same form name
    destroyOnUnmount: false,        // <------ preserve form data
    forceUnregisterOnUnmount: true  // <------ unregister fields on unmount

})(ServicoFormPage2)