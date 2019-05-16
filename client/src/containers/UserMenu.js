import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushRotate as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { getCabeleireiroName } from '../actions/cabeleireiro';



class UserMenu extends Component {
    componentDidMount() {
        let id = "5cdca4592285902f5c36802a";
        this.props.getCabeleireiroName(id);
    }

    render() {
        return (
            <Menu pageWrapId={"page-wrap"} >
                <div style={{ marginBottom: 60 }}>
                    <img src="/img/icones/essential/svg/user-3.svg" width="70px" />
                </div>
                <span>Menu Principal</span>
                <hr />
                <Link to="/Editar/5cdca4592285902f5c36802a" className="menu-item" style={{ marginBottom: 20 }}>
                    <img src="/img/icones/essential/svg/edit.svg" width="20px" />
                    <span style={{ marginLeft: 30 }}>Editar</span>
                </Link>
                <Link to="/Ajuda" className="menu-item" style={{ marginBottom: 20 }}>
                    <img src="/img/icones/essential/svg/help.svg" width="20px" />
                    <span style={{ marginLeft: 30 }}>Ajuda</span>
                </Link>
                <Link to="/Termos" className="menu-item" style={{ marginBottom: 20 }}>
                    <img src="/img/icones/essential/svg/notepad-2.svg" width="20px" />
                    <span style={{ marginLeft: 30 }}>Termos</span>
                </Link>
                <hr />
                <Link to="/" className="menu-item" style={{ marginBottom: 20 }}>
                    <img src="/img/icones/essential/svg/exit-2.svg" width="20px" />
                    <span style={{ marginLeft: 30 }}>Sair</span>
                </Link>
            </Menu>
        )
    }
}

export default connect(
    null,
    { getCabeleireiroName }
)(UserMenu);
