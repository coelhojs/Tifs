import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Menu from "../components/Menu";

class Home extends Component {
    render() {
        return (
            <main className="container-fluid">
                <br />
                <Menu />
            </main>
        );
    }
}

export default Home;
