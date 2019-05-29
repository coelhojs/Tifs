import React from "react";
import { Field } from 'redux-form';
import inputField from '../components/inputField';

const MaterialUtilizado = ({ fields }) => {
    return (
        <div>
            <div className="d-inline-flex">
                <label className="col-12">Materiais utilizados</label>
                <img src="/img/icon/add.png" onClick={() => fields.push()} alt="" />
            </div>
            {fields.map((produto, index) => (
                <div className="form-row" key={index}>
                    <div className="col">
                        <Field
                            name={`produto${index}`}
                            type="text"
                            component={inputField}
                            value={produto}
                            
                        />
                    </div>
                    <div className="col">
                        <Field name={`medida${index}`} component="select" className="form-control">
                            <option value="" defaultValue></option>
                            <option value="ml">ml</option>
                            <option value="L">L</option>
                            <option value="mg">mg</option>
                            <option value="g">g</option>
                        </Field>
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