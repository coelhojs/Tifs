import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import CadastroCliente from "./components/CadastroCliente";
import Home from "./components/Home";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />

                    <Route exact path="/" component={Home} />
                    {/* <Route path="/about" component={About} />
                    <Route path="/topics" component={Topics} /> */}
                </div>
            </Router>
        );
    }
}

export default App;
