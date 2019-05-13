import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editCabeleireiro, fetchCabeleireiro } from '../actions/cabeleireiro';
import CabeleireiroEditar from "../forms/cabeleireiroEditar";

class EditarCadastro extends Component {
    componentDidMount() {
        //this.props.fetchCabeleireiro(this.props.match.params.id);
        this.props.fetchCabeleireiro(2);
    }

    // onSubmit(props) {
    //     this.props.createCabeleireiro(props, () => {
    //         //history.push('/');
    //     });
    // }

    render() {
        if (!this.props.cabeleireiro) {
            return <div>Loading...</div>;
        }

        return (
            <CabeleireiroEditar onSubmit={this.onSubmit} />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { cabeleireiro: state.cabeleireiros[ownProps.match.params.id] };
};

export default connect(
    mapStateToProps,
    { fetchCabeleireiro, editCabeleireiro }
)(EditarCadastro);