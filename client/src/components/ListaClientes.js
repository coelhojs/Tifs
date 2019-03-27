import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchClientes } from "../actions/index";

import ItemCliente from "./ItemCliente";

class ListaClientes extends Component {
    componentWillMount() {
        this.props.fetchClientes();
    }

    renderClientes() {
        return _.map(this.props.clientes, clientes => {
            return <ItemCliente key={clientes.id} clientes={clientes} />;
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">{this.renderClientes()}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { clientes: state.clientes };
}

export default connect(
    mapStateToProps,
    { fetchClientes }
)(ListaClientes);
