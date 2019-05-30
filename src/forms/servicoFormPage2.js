import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import inputField from '../components/inputField';
//import inputField from '../components/inputField';

const ServicoFormPage2 = (props) => {
    const { handleSubmit, previousPage, servicos } = props

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <label className="col-3">Serviço</label>
                <div className="col-9">
                    <Field name="nome" className="form-control" component="select">
                        <option value="Escova" defaultValue>Escova</option>
                        <option value="Corte">Corte</option>
                        <option value="Coloração">Coloração</option>
                        <option value="Selagem">Selagem</option>
                        <option value="Mechas">Mechas</option>
                    </Field>
                </div>
            </div>
            {/* <FieldArray name="materiais" items={servicos} component={MaterialUtilizado} /> */}
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

const MaterialUtilizado = ({ fields }) => {
    return (
        <div>
            <div className="row">
                <div className="col-8">
                    Materiais utilizados
                </div>
                <div className="col-4">
                    <img src="/img/icon/add.png" onClick={() => fields.push()} alt="" />
                </div>
            </div>
            <br />

            {fields.map((produto, index) => (
                <div className="row" key={index}>
                    <div className="form-group col-4 text-center">
                        <label>Produto</label>
                        <Field
                            name={`produto${index}`}
                            type="text"
                            className="form-control"
                            component={inputField}
                            value={produto}
                        />
                    </div>
                    <div className="form-group col-4 text-center">
                        <label>Medida</label>
                        <div className="row">
                            <Field
                                name={`quantidade${index}`}
                                type="text"
                                className="form-control col-7"
                                component={inputField}
                                value={produto}
                            />
                            <span className="col-1" style={{ paddingLeft: '0px', paddingRight: '0px' }}></span>
                            <Field name={`medida${index}`} component="select" className="form-control col-4">
                                <option value="" defaultValue></option>
                                <option value="ml">ml</option>
                                <option value="L">L</option>
                                <option value="mg">mg</option>
                                <option value="g">g</option>
                            </Field>
                        </div>
                    </div>
                    <div className="col">
                        <img src="/img/icon/delete.png" onClick={() => fields.remove(index)} alt="Remover produto" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default reduxForm({
    form: 'servicoForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
})(ServicoFormPage2)