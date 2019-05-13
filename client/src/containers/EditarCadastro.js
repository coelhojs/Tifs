import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editCabeleireiro, fetchCabeleireiro } from '../actions/cabeleireiro';
import CabeleireiroEditar from "../forms/cabeleireiroEditar";

class EditarCadastro extends Component {
    render() {
        return (
            <CabeleireiroEditar onSubmit={this.onSubmit} />
        );
    }
}

export default EditarCadastro;