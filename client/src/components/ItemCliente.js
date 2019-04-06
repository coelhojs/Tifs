import React from "react";

const ItemCliente = ({ clientes }) => {
    const key = clientes.id;
    const nome = clientes.Nome;
    const cpf = clientes.CPF;
    const dataNasc = clientes.DataNascimento;

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
