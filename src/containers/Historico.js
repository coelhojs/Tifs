import _ from "lodash";
import React, { Component } from 'react';
import cardServico from "../components/cardServico";
import { fetchServicos } from '../actions/servico';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import SearchInput from "../components/searchInput";
import { Carousel } from '3d-react-carousal';

class Historico extends Component {
    componentWillMount() {
        this.props.fetchServicos();
    }

    renderServicosRecentes() {
        let slides = [];
        return _.map(this.props.servicos, servico => {
            slides.push(<cardServico props={servico} />);
            return slides;
        });
    }

    renderServicos() {
        let slides = [];
        return _.map(this.props.servicos, servico => {
            slides.push(<cardServico props={servico} />);
            return slides;
        });
    }

    render() {
        //const slides = this.renderServicos();

        return (
            <div className="container-fluid">
                <div className="text-center">
                    <div className="offset-md-5">
                        <SearchInput />
                    </div>
                    <div className="btn-group btn-group-sm">
                        <button type="button" className="btn btn-secondary">Recentes</button>
                        <button type="button" className="btn btn-secondary">Todos</button>
                    </div>
                </div>
                <br />
                
                {/* <Carousel slides={this.renderServicos()} /> */}
                {/* https://www.npmjs.com/package/react-spring-3d-carousel */}
                {/* https://github.com/suhailsulu/react-carousel-3d */}
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
)(Historico);
