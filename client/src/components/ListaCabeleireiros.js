import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchCabeleireiros } from "../actions/index";

import ItemCabeleireiro from "./ItemCabeleireiro";

class ListaCabeleireiros extends Component {
    componentWillMount() {
        this.props.fetchCabeleireiros();
    }

    renderCabeleireiros() {
        return _.map(this.props.cabeleireiros, cabeleireiros => {
            return <ItemCabeleireiro key={cabeleireiros.id} cabeleireiros={cabeleireiros} />;
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">{this.renderCabeleireiros()}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { cabeleireiros: state.cabeleireiros };
}

export default connect(
    mapStateToProps,
    { fetchCabeleireiros }
)(ListaCabeleireiros);
