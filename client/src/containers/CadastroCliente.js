import React, { Component } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

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

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert("A name was submitted: " + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form className="container" onSubmit={this.handleSubmit}>
                <Input
                    name={"nome"}
                    label={"Nome"}
                    labelClasses={"col-3"}
                    inputClasses={"col-9"}
                    inputType={"text"}
                    onChange={this.handleChange}
                    placeholder="Digite o nome"
                    value={this.setState.Nome}
                />
                <div className="form-group row">
                    <label className="col-3">CPF</label>
                    <div className="col-9">
                        <input
                            name="CPF"
                            type="text"
                            value={this.setState.CPF}
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Digite o cpf"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-4">Data de nascimento</label>
                    <div className="col-8">
                        <input
                            name="DataNascimento"
                            type="date"
                            value={this.setState.DataNascimento}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-3">Telefone</label>
                    <div className="col-9">
                        <input
                            name="Telefone"
                            type="tel"
                            value={this.setState.Telefone}
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Digite o telefone"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-3">E-mail</label>
                    <div className="col-9">
                        <input
                            name="Email"
                            type="email"
                            value={this.setState.Email}
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Digite o e-mail"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-12">Você já teve episódios de alergia a algum produto cosmético?</label>
                    <div className="col">
                        <div className="custom-control custom-radio custom-control-inline">
                            <input
                                type="radio"
                                id="alergia-sim"
                                name="Alergias"
                                value={(this.setState.Alergias = "true")}
                                onChange={this.handleChange}
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
                                value={(this.setState.Alergias = "false")}
                                onChange={this.handleChange}
                                className="custom-control-input"
                            />
                            <label className="custom-control-label" htmlFor="alergia-nao">
                                Não
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-12">Você está em período de gravidez?</label>
                    <div className="col">
                        <div className="custom-control custom-radio custom-control-inline">
                            <input
                                className="custom-control-input"
                                id="gravidez-sim"
                                name="Gestante"
                                onChange={this.handleChange}
                                type="radio"
                                value={(this.setState.Gestante = "true")}
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
                                value={(this.setState.Gestante = "false")}
                                onChange={this.handleChange}
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
                        value={this.state.AutorizaFotos}
                        onChange={this.handleChange}
                    />
                    <label className="custom-control-label" htmlFor="autorizacao-fotografia">
                        Autorizo o registro fotográfico do resultado do meu tratamento capilar para o controle do
                        atendimento por mim recebido
                    </label>
                </div>
                <br />
                <div className="text-center">
                    <Button type={"submit"} classes={"btn btn-success"} label={"Cadastrar"} linkTo={""} />
                    <Button type={"reset"} classes={"btn btn-danger"} label={"Cancelar"} linkTo={"/"} />
                </div>
                <br />
            </form>
        );
    }
}

export default CadastroCliente;
