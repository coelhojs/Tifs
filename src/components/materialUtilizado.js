import React from "react";
import { Field } from 'redux-form';
import inputField from '../components/inputField';

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
                <div className="row">
                    <div className="form-group col-4" key={index}>
                        <label>Produto</label>
                        <Field
                            name={`produto${index}`}
                            type="text"
                            className="form-control"
                            component="input"
                            value={produto}
                        />
                    </div>
                    <div className="form-group col-4">
                        <label>Medida</label>
                        <div className="row">
                            <Field
                                name={`quantidade${index}`}
                                type="text"
                                className="form-control col-5"
                                component="input"
                                value={produto}
                            />
                            <span className="col-1" style="padding-left:0px;padding-right:0px"></span>
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

export default MaterialUtilizado;