import React from "react";
import { create } from "apisauce";
import { api } from "../api/index";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class CadastroCabeleireiro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            Nome: "",
            Telefone: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        api.post("/Cabeleireiros", {
            Nome: this.state.Nome,
            Telefone: this.state.Telefone,
            Email: this.state.Email
        }).then(function(response) {
            console.log(response);
        });
    }

    render() {
        return (
            <form className="container" onSubmit={this.handleSubmit}>
                <div className="foto-container text-center">
                    <img src="../profile-img.jpg" alt="imagem" />
                </div>
                <div className="form-group row">
                    <label className="col-3 col-form-label">Nome</label>
                    <div className="col">
                        <input
                            name="Nome"
                            type="text"
                            value={this.state.Nome}
                            onChange={this.handleInputChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-3 col-form-label">Telefone</label>
                    <div className="col">
                        <input
                            name="Telefone"
                            type="tel"
                            value={this.state.Telefone}
                            onChange={this.handleInputChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-3 col-form-label">E-mail</label>
                    <div className="col">
                        <input
                            name="Email"
                            type="email"
                            value={this.state.Email}
                            onChange={this.handleInputChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <br />
                <button type="submit" className="btn btn-success">
                    OK
                </button>
                <button className="btn btn-danger">
                    <Link to="/">Cancelar</Link>
                </button>
                <br />
            </form>
        );
    }
}

export default CadastroCabeleireiro;
