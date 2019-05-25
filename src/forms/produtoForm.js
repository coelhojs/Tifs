import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createProduto } from '../actions/produto';
import inputField from "../components/inputField";
import '../style/general.scss';

let history = require("history").createBrowserHistory;

const required = value => value ? undefined : 'Campo obrigatório'
const maxLength = max => value =>
    value && value.length > max ? `Este campo recebe no máximo ${max} caracteres` : undefined
const maxLength15 = maxLength(30)
const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined
const minValue18 = minValue(1)
const number = value => value && isNaN(Number(value)) ? 'Este campo permite somente números' : undefined
const tooOld = value =>
    value && value > 5000 ? 'O valor máximo permitido é 5000' : undefined

class ProdutoForm extends Component {
    onSubmit(props) {
        this.props.createProduto(props, () => {
            history.push('/Produtos');
        });
    }
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;

        return (
            <form className="container formMobileProd" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="text-center"><h1>Cadastro de Produto</h1></div>
                <hr />
                {/* <div className="form-group row">
                    <label className="col-2">Categoria</label>
                    <div className="col-10">
                        <Field name="categoria" component="select">
                            <option value="shampoo" defaultValue>shampoo</option>
                            <option value="coloração">coloração</option>
                        </Field>
                    </div>
                </div> */}
                <Field name="categoria" label="Categoria" component={inputField} validate={[required, maxLength15]} />
                <Field name="marca" label="Marca" component={inputField} type="text"
                    placeholder="Ex.: Loreal" validate={[required, maxLength15]}
                />
                <Field name="linha" label="Linha" component={inputField} type="text"
                    placeholder="Ex.: Kids" validate={[required, maxLength15]}
                />
                <Field name="descricao" label="Descrição" component={inputField} type="text" validate={[required, maxLength15]} />
                <Field name="conteudo" label="Conteúdo" component={inputField} type="number"
                    placeholder="500" validate={[required, number, minValue18]} warn={tooOld}
                />
                {/* <Field name="medida" component="select">
                            <option value="ml">ml</option>
                            <option value="l">l</option>
                            <option value="mg">mg</option>
                            <option value="g">g</option>
                            <option value="kg">kg</option>
                        </Field> */}
                <Field name="medida" label="Medida" component={inputField} validate={[required, maxLength15]} />
                <br />
                <div className="modal fade" id="meuModal" tabindex="-1" role="dialog" aria-labelledby="meuModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h4 className="modal-title text-center" id="meuModalLabel">Confirmação de cadastro</h4>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>      
                            </div>
                            <div className="modal-body">
                               Deseja finalizar o cadastro do produto: 
                    </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Fechar</button>
                                <button type="submit" className="btn btn-primary">Concluir cadastro</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="button-group d-flex justify-content-around">
                    <button type="button" className="btn btn-success" data-toggle="modal" data-target="#meuModal" disabled={pristine || submitting}
                        onSubmit={reset}>
                        Cadastrar
                        </button>
                    <button type="button" className="btn btn-danger" disabled={pristine || submitting} onClick={reset}>
                        Cancelar
                        </button>
                </div>
                <br />
                {/* <p className="text-center">Dúvidas ao cadastrar o produto? <a href="">Clique aqui</a></p> */}
            </form >
        );
    }
}

//reduxForm: 1st is form config
//connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
export default reduxForm({
    form: 'produtoForm'
})(
    connect(null, { createProduto })(ProdutoForm)
);