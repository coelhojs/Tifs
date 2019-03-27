import React from "react";

const ItemCliente = ({ clientes }) => {
    const key = clientes.id;
    const nome = clientes.Nome;

    return (
        <div className="col-md-3 card">
            <div className="card__header">
                {/* <figure className="photo">
                    <img
                        className="img-fluid photo__img"
                        src="../../../public/assets/img/moto.svg"
                        alt="Imagem do veículo"
                    />
                </figure> */}
            </div>
            <div className="card__body">
                <h2>{nome}</h2>
            </div>
        </div>
    );
};

export default ItemCliente;
