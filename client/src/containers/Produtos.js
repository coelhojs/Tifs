import React, { Component } from 'react';
import ProdutoForm from "../forms/produtoForm";

class Produtos extends Component {
    render() {
        return (
            <div>
                <ProdutoForm onSubmit={this.onSubmit} />  
            </div>
        );
    }
}

export default Produtos;