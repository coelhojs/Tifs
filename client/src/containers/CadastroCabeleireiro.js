import React from "react";
import { Link } from "react-router-dom";
import { api } from "../actions/index";

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
                <div className="form-group row">
                    <label className="col col-3">Nome</label>
                    <div className="col col-9">
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
                    <label className="col col-3">Telefone</label>
                    <div className="col col-9">
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
                    <label className="col col-3">E-mail</label>
                    <div className="col col-9">
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
