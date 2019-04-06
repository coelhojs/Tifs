import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
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
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">CPF</th>
                        <th scope="col-2">Data de nascimento</th>
                    </tr>
                </thead>
                <tbody>{this.renderClientes()}</tbody>
            </table>
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
