import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushRotate as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { getCabeleireiroName } from '../actions/cabeleireiro';

class UserMenu extends Component {
    // componentDidMount() {
    //     let id = "5cdca4592285902f5c36802a";
    //     this.props.getCabeleireiroName(id);
    // }

    render() {
        return (
            <Menu pageWrapId={"page-wrap"} >
                {/* <div>
                    <img src="/img/icon/female.png" alt="" />
                    <span>Olá, {this.props.cabeleireiro}</span>
                </div> */}
                <Link to="/Editar/5cdca3cf4846a141f0c72d19" className="menu-item">Editar</Link>
                <Link to="/Ajuda" className="menu-item">Ajuda</Link>
                <Link to="/Termos" className="menu-item">Termos</Link>
                <Link to="/" className="menu-item">Sair</Link>
            </Menu>
        )
    }
}

export default connect(
    null,
    { getCabeleireiroName }
)(UserMenu);
