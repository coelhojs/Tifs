import React, { Component } from "react";
import ServicoForm from "../components/servicoForm";

class Anamnese extends Component {
    render() {
        return (
            <div>
                <ServicoForm onSubmit={this.onSubmit} />
            </div>)
    }
}

export default Anamnese;
