import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ServicoFormPage2 = (props) => {
    const { handleSubmit, servicos } = props

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
                <label className="col-12">Materiais utilizados</label>
                <div className="col-12">
                    <Field name="materiais" component="textarea" />
                    {/* <FormProdutos */}
                    {/* <Field name="produto" component="select">
                        <option>Selecione o servico</option>
                        {produtos}
                    </Field> */}
                </div>
            </div>
            {/* <button type="button" className="btn btn-secondary" onClick={previousPage}>
                Anterior
                </button> */}
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