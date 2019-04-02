import React from "react";

const ItemCabeleireiro = ({ cabeleireiros }) => {
    //const key = cabeleireiros.id;
    const nome = cabeleireiros.Nome;

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

export default ItemCabeleireiro;
