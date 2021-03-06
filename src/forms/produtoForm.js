import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createProduto } from '../actions/produto';
import InputField from "../components/inputField";
import '../style/general.scss';

let history = require("history").createBrowserHistory;

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
                <Field name="categoria" label="Categoria" component={InputField}  />
                <Field name="marca" label="Marca" component={InputField} type="text"
                    placeholder="Ex.: Loreal" 
                />
                <Field name="linha" label="Linha" component={InputField} type="text"
                    placeholder="Ex.: Kids" 
                />
                <Field name="descricao" label="Descrição" component={InputField} type="text"  />
                <Field name="conteudo" label="Conteúdo" component={InputField} type="number"
                    placeholder="500"  
                />
                {/* <Field name="medida" component="select">
                            <option value="ml">ml</option>
                            <option value="l">l</option>
                            <option value="mg">mg</option>
                            <option value="g">g</option>
                            <option value="kg">kg</option>
                        </Field> */}
                <Field name="medida" label="Medida" component={InputField}  />
                <div className="button-group d-flex justify-content-around">
                    <button type="button" className="btn btn-success"  disabled={pristine || submitting}
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

export default reduxForm({
    form: 'produtoForm'
})(
    connect(null, { createProduto })(ProdutoForm)
);