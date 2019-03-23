import React from "react";
import { create } from "apisauce";

const api = create({
    baseURL: "http://localhost:3004",
    timeout: 30000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});

class CadastroCliente extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cliente: [
                {
                    IdCliente: "",
                    Nome: "",
                    CPF: "",
                    AutorizaFotos: "",
                    DataNascimento: "",
                    Telefone: "",
                    Email: "",
                    Alergias: "",
                    Gestante: ""
                }
            ]
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
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
            DataNascimento: "2019-03-22T21:06:40.585Z",
            Telefone: "string",
            Email: "string",
            Alergias: "string",
            Gestante: true
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
                        <input type="tel" className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-3 col-form-label">E-mail</label>
                    <div className="col">
                        <input type="email" className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-4 col-form-label">
                        Data de nascimento
                    </label>
                    <div className="col">
                        <input type="date" className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-2">
                        Você já teve episódios de alergia a algum produto
                        cosmético?
                    </div>
                    <div className="col-sm-10">
                        <div className="custom-control custom-radio custom-control-inline">
                            <input
                                type="radio"
                                id="alergia-sim"
                                name="alergia-sim"
                                className="custom-control-input"
                            />
                            <label
                                className="custom-control-label"
                                htmlFor="alergia-sim"
                            >
                                Sim
                            </label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input
                                type="radio"
                                id="alergia-nao"
                                name="alergia-nao"
                                className="custom-control-input"
                            />
                            <label
                                className="custom-control-label"
                                htmlFor="alergia-nao"
                            >
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
                                name="gravidez-sim"
                                className="custom-control-input"
                            />
                            <label
                                className="custom-control-label"
                                htmlFor="gravidez-sim"
                            >
                                Sim
                            </label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input
                                type="radio"
                                id="gravidez-nao"
                                name="gravidez-nao"
                                className="custom-control-input"
                            />
                            <label
                                className="custom-control-label"
                                htmlFor="gravidez-nao"
                            >
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
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="autorizacao-fotografia"
                    >
                        Autorizo o registro fotográfico do resultado do meu
                        tratamento capilar para o controle do atendimento por
                        mim recebido
                    </label>
                </div>
                <br />
                <button type="submit" className="btn btn-success">
                    Concluir
                </button>
                <br />
            </form>
        );
    }
}

export default CadastroCliente;
