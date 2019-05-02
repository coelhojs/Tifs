import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProdutos } from "../actions/produto";
import ItemProduto from "./itemProduto";

class ListaProdutos extends Component {
    componentWillMount() {
        this.props.fetchProdutos();
    }

    renderProdutos() {
        return _.map(this.props.produtos, produto => {
            return <ItemProduto key={produto.id} produto={produto} />;
        });
    }

    render() {
        return (
            <div className="list-group">
                {this.renderProdutos()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { produtos: state.produtos };
}

export default connect(
    mapStateToProps,
    { fetchProdutos }
)(ListaProdutos);
