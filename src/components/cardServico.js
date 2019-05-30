import React from 'react';
import { Link } from "react-router-dom";

const cardServico = servico => {
    return (
        <div key={servico.id}>
            <div className="card__header">{servico.nome}</div>
            <div className="card__body">
                <h2>{servico.cliente}</h2>
                <h4>{servico.data}</h4>
                <p>{servico.anotacoes}</p>
            </div>
            <div className="card__footer">
                <Link to={`/Servico/${servico.id}`} />
            </div>
        </div>
    );
};

export default cardServico;