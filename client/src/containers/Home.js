import React, { Component } from "react";
import Menu from "./Menu";

class Home extends Component {
    render() {
        return (
            <main className="container-fluid">
                <div className="text-center">
                    <br />
                    <h4>Bem-vind@!</h4>
                </div>
                <br />
                <Menu />
            </main>
        );
    }
}

export default Home;
