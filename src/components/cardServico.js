import React from 'react';
import { Link } from "react-router-dom";

const CardServico = ({ servicos }) => {
    return (
        <div key={servicos.id}>
            <div className="card__header">{servicos.nome}</div>
            <div className="card__body">
                <h2>{servicos.cliente}</h2>
                <h4>{servicos.data}</h4>
                <p>{servicos.anotacoes}</p>
            </div>
            <div className="card__footer">
                <Link to={`/Servico/${servicos.id}`} />
            </div>
        </div>
    );
};

export default CardServico;