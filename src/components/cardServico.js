import React from 'react';
import { Link } from "react-router-dom";
import Divider from "./divider";

const CardServico = ({ servicos }) => {
    return (
        <div className="col-md-3">
            <div key={servicos.id} className="card">
                <div className="card__header card-header">{servicos.nome}</div>
                <div className="card__body card-body">
                    <div className="card-title text-center">
                        <h4>{servicos.cliente}</h4>
                    </div>
                    <Divider />
                    <div className="body__data text-left">
                        <img src="/img/icon/calendar-5.svg" />
                        <span>{servicos.data}</span>
                    </div>
                    <div className="body__anotacoes text-left">
                        <img src="/img/icon/note.svg" />
                        <span>{servicos.anotacoes}</span>
                    </div>
                </div>
                <div className="card__footer card-footer text-center">
                    <Link to={{
                        pathname: `/Historico/${servicos.id}`,
                        state: { servicos: { servicos } }
                    }}>Visualizar</Link>
                </div>
            </div>
        </div>
    );
};

export default CardServico;