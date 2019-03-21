import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import CadastroCliente from "./components/CadastroCliente";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <main className="container-fluid">
                    <CadastroCliente />
                </main>
            </div>
        );
    }
}

export default App;
