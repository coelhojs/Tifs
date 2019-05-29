// import React from 'react'
// import { Field, reduxForm } from 'redux-form'
// import inputField from '../components/inputField.js'

// const renderError = ({ meta: { touched, error } }) =>
//     touched && error ? <span>{error}</span> : false

// const ServicoFormPage2 = props => {
//     const { handleSubmit, previousPage } = props
//     return (
//         <form onSubmit={handleSubmit}>
//             <Field name="email" type="email" component={inputField} label="Email" />
//             <div>
//                 <label>Sex</label>
//                 <div>
//                     <label>
//                         <Field
//                             name="sex"
//                             component="input"
//                             type="radio"
//                             value="male"
//                         />{' '}
//                         Male
//           </label>
//                     <label>
//                         <Field
//                             name="sex"
//                             component="input"
//                             type="radio"
//                             value="female"
//                         />{' '}
//                         Female
//           </label>
//                     <Field name="sex" component={renderError} />
//                 </div>
//             </div>
//             <div>
//                 <button type="button" className="previous" onClick={previousPage}>
//                     Previous
//         </button>
//                 <button type="submit" className="next">
//                     Next
//         </button>
//             </div>
//         </form>
//     )
// }

// export default reduxForm({
//     form: 'servicoForm', //Form name is same
//     destroyOnUnmount: false,
//     forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
// })(ServicoFormPage2)

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
                    <Field name="nome" className="form-control" component="select">
                        <option value="Escova" defaultValue>Escova</option>
                        <option value="Corte">Corte</option>
                        <option value="Coloração">Coloração</option>
                        <option value="Selagem">Selagem</option>
                        <option value="Mechas">Mechas</option>
                    </Field>
                </div>
            </div>
            <div className="form-group">
                <div className="col-12">
                    <FieldArray name="materiais" items={servicos} component={MaterialUtilizado} />
                </div>
            </div>
            <div className="modal fade" id="meuModal" tabindex="-1" role="dialog" aria-labelledby="meuModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title text-center" id="meuModalLabel">Confirmação de cadastro</h4>
                            <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                        </div>
                        <div className="modal-body">
                            Deseja finalizar o cadastro do serviço:
                    </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Fechar</button>
                            <button type="submit" className="btn btn-primary">Concluir cadastro</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="button-group d-flex justify-content-around">
                <button type="button" className="btn btn-secondary" onClick={previousPage}>
                    Voltar
                </button>
                <button type="button" className="btn btn-success" data-toggle="modal" data-target="#meuModal" >
                    Concluído
                </button>
            </div>
        </form >

    )
}

export default reduxForm({
    form: 'servicoForm',                 // <------ same form name
    destroyOnUnmount: false,        // <------ preserve form data
    forceUnregisterOnUnmount: true  // <------ unregister fields on unmount

})(ServicoFormPage2)