import _ from "lodash";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import { createServico, fetchClientes, fetchProcedimentos } from '../actions/index';
import ServicoFormPage1 from "./servicoFormPage1";
import ServicoFormPage2 from "./servicoFormPage2";
let history = require("history").createBrowserHistory;

function getDate() {
    var currentTime = new Date(),
        month = '' + (currentTime.getMonth() + 1),
        day = '' + currentTime.getDate(),
        year = currentTime.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

const defaultValues = {
    data: getDate()
}

class ServicoForm extends Component {
    constructor(props) {
        super(props)
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.state = {
            page: 1
        }
    }
    nextPage() {
        this.setState({ page: this.state.page + 1 })
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 })
    }

    componentWillMount() {
        this.props.fetchClientes();
        this.props.fetchProcedimentos();
    }

    renderClientes() {
        return _.map(this.props.clientes, clientes => {
            return <option key={clientes.id} value={clientes.nome}>{clientes.nome}</option>;
        });
    }

    renderProcedimentos() {
        console.log(this.props.procedimentos);
        return _.map(this.props.procedimentos, procedimentos => {
            return <option key={procedimentos.id} value={procedimentos.nome}>{procedimentos.nome}</option>;
        });
    }

    renderProdutos(procedimento) {
        return _.map(this.props.procedimentos[procedimento].produtos, procedimentos => {
            return <label>{this.props.procedimentos[procedimento].produtos}
                <Field name="{this.props.procedimentos[procedimento].produtos}" component="input" type="text" placeholder="" />
            </label>
                ;
        });
    }

    onSubmit(props) {
        this.props.createServico(props, () => {
            history.push('/');
        });
    }

    render() {
        //        const { renderClientes } = this.props;
        const { page } = this.state
        return (
            <div>
                {page === 1 && <ServicoFormPage1 onSubmit={this.nextPage} clientes={this.renderClientes()} />}
                {page === 2 && (
                    <ServicoFormPage2 produtos={this.renderProdutos(1)} procedimentos={this.renderProcedimentos()}
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage}
                    />
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { initialValues: defaultValues, clientes: state.clientes, procedimentos: state.procedimentos, produtos: state.produtos };
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
ServicoForm = reduxForm({
    form: 'servicoForm'  // a unique identifier for this form
})(ServicoForm)

// You have to connect() to any reducers that you wish to connect to yourself
ServicoForm = connect(
    mapStateToProps,
    // state => ({
    //     initialValues: defaultValues // pull initial values from account reducer
    // }),
    { fetchClientes, fetchProcedimentos }
)(ServicoForm)

export default ServicoForm