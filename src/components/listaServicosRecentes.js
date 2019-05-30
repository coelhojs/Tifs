import _ from "lodash";
import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchServicos } from '../actions/servico';
import CardServico from "../components/cardServico";

class ListaServicosRecentes extends Component {
    componentWillMount() {
        this.props.fetchServicos();
    }

    renderServicos() {
        return _.map(this.props.servicos, servicos => {
            console.log(servicos.cliente);
            return <CardServico key={servicos.id} servicos={servicos} />
        });
    }

    render() {
        return (
            <div className="list-group">
                {this.renderServicos()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { servicos: state.servicos };
}

export default connect(
    mapStateToProps,
    { fetchServicos }
)(ListaServicosRecentes);