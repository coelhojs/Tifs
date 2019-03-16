import React, { Component } from "react";
import Avaliacao from "./components/Avaliacao";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header" />
                <Avaliacao />
                <Avaliacao />
                <Avaliacao />
            </div>
        );
    }
}

export default App;
