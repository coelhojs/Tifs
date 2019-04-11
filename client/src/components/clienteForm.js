import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createCliente } from '../actions/index';
import InputMask from 'react-input-mask';

let history = require("history").createBrowserHistory;

const required = value => value ? undefined : 'Obrigatório';
const number = value => value && isNaN(Number(value)) ? 'Este campo aceita somente números' : undefined;
const string = value => value && isNaN(Number(value)) ? 'Este campo aceita somente letras' : undefined;
const minValue = min => value => value && value < min ? `O campo deve ser maior que ${min} caracteres` : undefined;
const minValueName = minValue(2);
const maxValueCpf = max => value => value && value > max ? `O campo deve ter ${max} caracteres` : undefined;
const valueCpfMax = maxValueCpf(11);
const minValueCpf = min => value => value && value < min ? `O campo deve ter ${min} caracteres` : undefined;
const valueCpfMin= minValueCpf(11);

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);


export const maxLenght = max => value => {

    let v;
    let result = value.length > max;

    if(result === false) {
        v = value;
    }
    return v;
};

class ClienteForm extends Component {



    onSubmit(props) {
        this.props.createCliente(props, () => {
            history.push('/');
        });

    }


    render() {
        const sexo = ["Feminino", "Masculino", "Outros", "Prefiro não dizer"];

            const {handleSubmit, pristine, reset, submitting} = this.props;
            return (
                <form className="container" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <div className="form-group row">
                        <label className="col-4">Nome</label>
                        <div className="col-12">
                            <Field name="nome" className="form-control" component={renderField} type="text"
                                   placeholder="Nome completo" validate={[required]} 
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-3">Sexo</label>
                        <div className="col-9">
                            <Field name="sexo" className="form-control" component="select">
                                {sexo.map(sexoOption =>
                                    <option value={sexoOption} key={sexoOption}>{sexoOption}</option>)}
                            </Field></div>
                    </div>
                    <div className="form-group row">
                        <label className="col-3">CPF</label>
                        <div className="col-9">
                            <Field name="cpf" className="form-control" component={renderField} type="number" placeholder=""
                                   validate={[required, number]} normalize={maxLenght(11)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col">Data de nascimento</label>
                        <div className="col-12">
                            <Field name="dataNascimento" className="form-control" component="input" type="date"
                                   placeholder="" validate={[required]}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-4">Telefone</label>
                        <div className="col-8">
                            <Field name="telefone" className="form-control" component="input" type="text"
                                   placeholder="" validate={[required, number]} normalize={maxLenght(11)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-4">E-mail</label>
                        <div className="col-12">
                            <Field name="email" className="form-control" component="input" type="email" placeholder=""
                                   validate={[required]}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Você já teve episódios de alergia a algum produto cosmético?</label>
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <Field name="alergias" className="form-check-input" component="input" type="radio"
                                       value="true" validate={[required]}/>
                                Sim</label>
                            <label className="form-check-label">
                                <Field name="alergias" className="form-check-input" component="input" type="radio"
                                       value="false" validate={[required]}/>
                                Não</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Você está em período de gravidez?</label>
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <Field name="gestante" className="form-check-input" component="input" type="radio"
                                       value="true" validate={[required]} />
                                Sim</label>
                            <label className="form-check-label">
                                <Field name="gestante" className="form-check-input" component="input" type="radio"
                                       value="false" validate={[required]}/>
                                Não
                            </label>
                        </div>
                    </div>
                    <br/>
                    <div className="button-group d-flex justify-content-around">
                        <button type="submit" className="btn btn-success" disabled={pristine || submitting}>
                            Cadastrar
                        </button>
                        <button type="button" className="btn btn-danger" disabled={pristine || submitting}
                                onClick={reset}>
                            Cancelar
                        </button>
                    </div>
                    <br/>
                </form>
            );

        }

}

// reduxForm: 1st is form config
// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
export default reduxForm({
    form: 'clienteForm'
})(
    connect(null, { createCliente })(ClienteForm)
);
