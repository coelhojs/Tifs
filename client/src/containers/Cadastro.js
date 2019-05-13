import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import CabeleireiroCadastro from "../forms/cabeleireiroCadastro";

class Cadastro extends Component {
    render() {
        return (
            <CabeleireiroCadastro onSubmit={this.onSubmit} />
        );
    }
}

export default Cadastro;