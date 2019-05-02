import React from "react";
//import moment from "moment";

const ItemProduto = ({ produtos }) => {
    //const key = (produtos.id).slice(-4);
    // const nome = produtos.nome;
    // const telefone = produtos.Telefone;
    //const cpf = produtos.CPF;
    //const dataNasc = moment(produtos.DataNascimento).format('DD/MM/YYYY');
    // const email = produtos.Email;
    const key = produtos.id;
    const categoria = produtos.categoria;
    const marca = produtos.marca;
    const linha = produtos.linha;
    const descricao = produtos.descricao;
    const conteudo = produtos.conteudo;
    const medida = produtos.medida;

    return (
        <div className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{categoria}</h5>
            </div>
        </div>

    );
};

export default ItemProduto;
