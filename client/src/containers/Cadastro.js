import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import CadastroForm from "../forms/cadastroForm";

class Cadastro extends Component {
    render() {
        return (
            <CadastroForm onSubmit={this.onSubmit} />
        );
    }
}

export default Cadastro;
