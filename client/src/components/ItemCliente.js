import React from "react";

const ItemCliente = ({ clientes }) => {
    const key = (clientes._id).slice(-4);
    const nome = clientes.nome;
    const cpf = clientes.cpf;
    const dataNasc = clientes.nascimento;

    return (
        <tr>
            <th scope="row">{key}</th>
            <td>{nome}</td>
            <td>{cpf}</td>
            <td>{dataNasc}</td>
        </tr>
    );
};

export default ItemCliente;
