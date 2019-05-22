import _ from "lodash";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { fetchClientes } from '../actions/cliente';
import inputField from "../components/inputField";
//import { fetchServicos } from '../actions/servico';
//import ServicoOptions from "./servicoOptions";
import ServicoFormPage1 from "./servicoFormPage1";
import ServicoFormPage2 from "./servicoFormPage2";
let history = require("history").createBrowserHistory;

const required = value => value ? undefined : 'Campo obrigatório'
const maxDescricao = max => value =>
    value && value.length > max ? `Este campo recebe no máximo ${max} caracteres` : undefined
const maxDescricaoTotal = maxDescricao(150)

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
        //this.props.fetchServicos();
    }

    renderClientes() {
        return _.map(this.props.clientes, clientes => {
            return <option key={clientes._id} value={clientes.nome}>{clientes.nome}</option>;
        });
    }

    renderServicos() {
        let id = 0;
        return _.map(this.props.servicos, servicos => {
            return <option key={id++} value={servicos.nome}>{servicos.nome}</option>;
        })
        //this.renderProdutos(servicos.nome));
    }

    renderMateriais() {
        let id = 0;
        let materiais = [];
        return _.map(this.props.servicos, servicos => {
            materiais.push(servicos.produtos)
            return <option key={id++} value={servicos.nome}>{servicos.nome}</option>;
        })
        //this.renderProdutos(servicos.nome));
    }

    // renderProdutos(nome) {
    //     console.log(this.props.servicos);
    //     console.log(nome);

    //     return _.map(this.props.servicos.produtos, produtos => {
    //         return <ServicoOptions key={produtos.id} produtos={produtos}></ServicoOptions>
    //     });
    // }

    onSubmit(props) {
        this.props.createServico(props, () => {
            history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;
        //const { renderClientes } = this.props;
        const { page } = this.state
        return (
            <div>
                {page === 1 && <ServicoFormPage1 onSubmit={this.nextPage} clientes={this.renderClientes()} />}
                {page === 2 && (
                    <ServicoFormPage2
                        //produtos={this.renderProdutos()}
                        servicos={this.renderServicos()}
                        previousPage={this.previousPage}
                        onSubmit={handleSubmit}
                    />
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    //const selector = formValueSelector('servicoForm')
    return {
        initialValues: defaultValues,
        clientes: state.clientes,
        servicos: state.servicos,
        produtos: state.produtos,
        //selectedServico: selector(state, 'servico') 
    };
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
    //{ fetchClientes, fetchServicos }
    { fetchClientes }
)(ServicoForm)

export default ServicoForm