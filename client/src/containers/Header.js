import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header className="text-center">
                <ul className="nav justify-content-between">
                    <li className="nav-item">
                        {/* <h5>Olá, Pricila</h5> */}
                    </li>
                    <li className="nav-item">
                        {/* <Link to="/">
                            Início
                    </Link> */}
                    </li>
                </ul>
                <div className="header-logo">
                    <Link to="/Home">
                        <img src="/img/logo-tifs.png" alt="" />
                    </Link>
                </div>
            </header>
        );
    }
}

export default Header;
