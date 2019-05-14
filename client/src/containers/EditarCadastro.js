import React, { Component } from 'react';
import CabeleireiroEditar from "../forms/cabeleireiroEditar";

class EditarCadastro extends Component {
    render() {
        return (
            <CabeleireiroEditar onSubmit={this.onSubmit} />
        );
    }
}

export default EditarCadastro;