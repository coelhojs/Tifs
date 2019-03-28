import React, { Component } from "react";
import { create } from "apisauce";
import { api } from "../api/index";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class CadastroCliente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            Nome: "",
            CPF: "",
            AutorizaFotos: "",
            DataNascimento: "",
            Telefone: "",
            Email: "",
            Alergias: "",
            Gestante: ""
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
        api.post("/Clientes", {
            IdCliente: "2",
            Nome: this.state.Nome,
            CPF: this.state.CPF,
            AutorizaFotos: this.state.AutorizaFotos,
            DataNascimento: this.state.DataNascimento,
            Telefone: this.state.Telefone,
            Email: this.state.Email,
            Alergias: this.state.Alergias,
            Gestante: this.state.Gestante
        }).then(function(response) {
            console.log(response);
        });
    }

    render() {
        return (
            <form className="container" onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <label className="col-3 col-form-label">Nome</label>
                    <div className="col">
                        <input
                            name="Nome"
                            type="text"
                            value={this.state.Nome}
                            onChange={this.handleInputChange}
                            className="form-control"
                            placeholder="Digite o nome"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-3 col-form-label">CPF</label>
                    <div className="col">
                        <input
                            name="CPF"
                            type="number"
                            value={this.state.CPF}
                            onChange={this.handleInputChange}
                            className="form-control"
                            placeholder="Digite o cpf"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-3 col-form-label">Data de nascimento</label>
                    <div className="col">
                        <input
                            name="DataNascimento"
                            type="date"
                            value={this.state.DataNascimento}
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
                            placeholder="Digite o telefone"
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
                            placeholder="Digite o e-mail"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-2">Você já teve episódios de alergia a algum produto cosmético?</div>
                    <div className="col-sm-10">
                        <div className="custom-control custom-radio custom-control-inline">
                            <input
                                type="radio"
                                id="alergia-sim"
                                name="Alergias"
                                value={(this.state.Alergias = true)}
                                onChange={this.handleInputChange}
                                className="custom-control-input"
                            />
                            <label className="custom-control-label" htmlFor="alergia-sim">
                                Sim
                            </label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input
                                type="radio"
                                id="alergia-nao"
                                name="Alergias"
                                value={(this.state.Alergias = false)}
                                checked={true}
                                onChange={this.handleInputChange}
                                className="custom-control-input"
                            />
                            <label className="custom-control-label" htmlFor="alergia-nao">
                                Não
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-2">Você está grávida?</div>
                    <div className="col-sm-10">
                        <div className="custom-control custom-radio custom-control-inline">
                            <input
                                type="radio"
                                id="gravidez-sim"
                                name="Gestante"
                                value={(this.state.Gestante = true)}
                                onChange={this.handleInputChange}
                                className="custom-control-input"
                            />
                            <label className="custom-control-label" htmlFor="gravidez-sim">
                                Sim
                            </label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input
                                type="radio"
                                id="gravidez-nao"
                                name="Gestante"
                                checked={true}
                                value={(this.state.Gestante = false)}
                                onChange={this.handleInputChange}
                                className="custom-control-input"
                            />
                            <label className="custom-control-label" htmlFor="gravidez-nao">
                                Não
                            </label>
                        </div>
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <div className="custom-control custom-checkbox">
                    <input
                        type="checkbox"
                        className="custom-control-input"
                        id="autorizacao-fotografia"
                        name="AutorizaFotos"
                        value={(this.state.AutorizaFotos = true)}
                        onChange={this.handleInputChange}
                    />
                    <label className="custom-control-label" htmlFor="autorizacao-fotografia">
                        Autorizo o registro fotográfico do resultado do meu tratamento capilar para o controle do
                        atendimento por mim recebido
                    </label>
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

export default CadastroCliente;
