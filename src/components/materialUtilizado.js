import React from "react";
import { Field } from 'redux-form';
import InputField from './inputField';

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
                    <InputField
                        name={`materiais[${index}].nome`} type="text"
                        label="Produto" inputClasses="form-control"
                        formGroupClasses="col-4 text-center" value={produto} />
                    <div className="form-group col-4 text-center">
                        <label>Medida</label>
                        <div className="row">
                            <Field
                                name={`materiais[${index}].quantidade`}
                                type="text"
                                className="form-control col-7"
                                component="input"
                                value={produto}
                            />
                            <span className="col-1" style={{ paddingLeft: '0px', paddingRight: '0px' }}></span>
                            <Field name={`materiais[${index}].medida`} component="select" className="form-control col-4">
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


// const MaterialUtilizado = ({ fields }) => {
//     return (
//         <div>
//             <div className="row">
//                 <div className="col-8">
//                     Materiais utilizados
//                 </div>
//                 <div className="col-4">
//                     <img src="/img/icon/add.png" onClick={() => fields.push()} alt="" />
//                 </div>
//             </div>
//             <br />

//             {fields.map((materiais, index) => (
//                 <div className="row" key={index}>
//                     <div className="form-group col-4 text-center">
//                         <label>{`Produto ${index + 1}`}</label>
//                         <Field
//                             name={materiais.nome}
//                             type="text"
//                             className="form-control"
//                             component={InputField}
//                         />
//                     </div>
//                     <div className="form-group col-4 text-center">
//                         <label>{`Medida ${index + 1}`}</label>
//                         <div className="row">
//                             <Field
//                                 name="materiais.quantidade"
//                                 type="text"
//                                 className="form-control col-7"
//                                 component={InputField}
//                             />
//                             <span className="col-1" style={{ paddingLeft: '0px', paddingRight: '0px' }}></span>
//                             <Field name="materiais.medida" component="select" className="form-control col-4">
//                                 <option value="" defaultValue></option>
//                                 <option value="ml">ml</option>
//                                 <option value="L">L</option>
//                                 <option value="mg">mg</option>
//                                 <option value="g">g</option>
//                             </Field>
//                         </div>
//                     </div>
//                     <div className="col">
//                         <img src="/img/icon/delete.png" onClick={() => fields.remove(index)} alt="Remover produto" />
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };
