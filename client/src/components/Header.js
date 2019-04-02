import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header className="text-center">
                <div className="header-logo">
                    <Link to="/">
                        <img src="/img/logo-tifs.png" alt="" />
                    </Link>
                </div>
            </header>
        );
    }
}

export default Header;
