import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createProduto } from '../actions/produto';
import '../style/general.css';

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
            history.push('/');
        });

        
    }
    render() {
            const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
                <div>
                  <label>{label}</label>
                  <div>
                    <input {...input} placeholder={label} type={type}/>
                    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
                  </div>
                </div>
              )
              
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <form className="container" onSubmit={handleSubmit(this.onSubmit.bind(this))} id="formMobileProd">
                <div className="text-center"><h1>Cadastro de Produto</h1></div>
                <hr/>
                <div className="form-group row">
                    <label className="col-2">Categoria</label>
                    <div className="col-10" class="resizeProdField">
                        <Field name="categoria" className="form-control" component="select">
                            {/* {sexo.map(sexoOption =>
                                <option value={sexoOption} key={sexoOption}>{sexoOption}</option>)} */}
                            <option value="shampoo">shampoo</option>
                            <option value="coloração">coloração</option>
                        </Field></div>
                </div>
                <div className="form-group row">
                    <label className="col-2">Marca</label>
                    <div className="col-10" class="resizeProdField">
                        <Field name="Marca" className="form-control" component="input" type="text"
                            placeholder="Ex.: Loreal" validate={[ required, maxLength15 ]}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-2">Linha</label>
                    <div className="col-10" class="resizeProdField">
                        <Field name="Linha" className="form-control" component="input"/*{renderField}*/ type="text"
                            placeholder="Ex.: Kids" validate={[ required, maxLength15 ]}
                        />
                    </div>
                </div>
                {/* <div className="form-group">
                    <label className="col-4">Marca</label>
                    <div className="col-12">
                        <Field name="nome" className="form-control" component="input" type="text"
                            placeholder="Ex.: Loreal"
                        />
                    </div>
                </div> */}
                <div className="form-group row">
                    <label className="col-2">Conteúdo da embalagem</label>
                    <div className="col-10" class="resizeProdField">
                        <Field name="Conteudo" className="form-control" component="input"/*{renderField}*/  type="number"
                            placeholder="500" validate={[ required, number, minValue18 ]} warn={tooOld}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-2">Medida</label>
                    <div className="col-10" class="resizeProdField">
                        <Field name="medida" className="form-control" component="select">
                            <option value="ml">ml</option>
                            <option value="ml">l</option>
                            <option value="ml">mg</option>
                            <option value="ml">g</option>
                            <option value="ml">kg</option>
                        </Field>
                    </div>
                </div>
                <br />
                <div className="button-group d-flex justify-content-around">
                    <button type="submit" className="btn btn-success" disabled={pristine || submitting}>
                        Cadastrar
                        </button>
                    <button type="button" className="btn btn-danger" disabled={pristine || submitting}
                        onClick={reset}>
                        Cancelar
                        </button>
                </div>
                <br />
                <p className="text-center">Dúvidas ao cadastrar o produto? <a href="">Clique aqui</a></p>
            </form>
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