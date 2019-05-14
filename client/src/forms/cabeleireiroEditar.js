import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { editCabeleireiro, fetchCabeleireiro } from '../actions/cabeleireiro';
import cabeleireiro from "../reducers/reducer_cabeleireiros";
import inputField from "../components/inputField";
import '../style/general.scss';

let history = require("history").createBrowserHistory;

class CabeleireiroEditar extends Component {
    componentDidMount() {
        //this.props.fetchCabeleireiro(this.props.match.params.id);
        this.props.fetchCabeleireiro(2);
    }

    onSubmit(props) {
        this.props.createCabeleireiro(props, () => {
            history.push('/');
        });
    }

    render() {
        // if (!this.props.cabeleireiro) {
        //     return <div>Loading...</div>;
        // }

        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <form className="container" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="text-center"><h1>Editar perfil</h1></div>
                <hr />
                <Field name="nome" label="Nome" component={inputField}
                    type="text" />
                <Field name="sobrenome" label="Sobrenome" component={inputField}
                    type="text" />
                <Field name="cnpj" label="CNPJ" component={inputField}
                    type="number" />
                <Field name="telefone" label="Telefone" component={inputField}
                    type="tel" />
                <Field name="email" label="E-mail" component={inputField}
                    type="email" />
                <Field name="dataNascimento" label="Data de nascimento" component={inputField}
                    type="date" />
                <Field name="senha" label="Senha" component={inputField}
                    type="password" />
                <Field name="repetirSenha" label="Repita a Senha" component={inputField}
                    type="password" />
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
            </form >
        );
    }
}


// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
CabeleireiroEditar = reduxForm({
    form: 'cabeleireiroEditar' // a unique identifier for this form
})(CabeleireiroEditar)

// You have to connect() to any reducers that you wish to connect to yourself
export default connect(
    state => ({
        initialValues: state.data // pull initial values from account reducer
    }),
    { cabeleireiro: cabeleireiro } // bind account loading action creator
)(CabeleireiroEditar)



// const mapStateToProps = (state, ownProps) => {
//     //return { cabeleireiro: state.cabeleireiros[ownProps.match.params.id] };
//     return { initialValues: state.cabeleireiros[2] };
// };

// // reduxForm: 1st is form config
// // connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// export default reduxForm({
//     form: 'cabeleireiroEditar'
// })(
//     connect(mapStateToProps, { editCabeleireiro, fetchCabeleireiro })(CabeleireiroEditar)
// );

// // export default connect(
// //     mapStateToProps,
// //     { fetchCabeleireiro, editCabeleireiro }
// // )(EditarCadastro);