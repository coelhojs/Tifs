//PRODUTOS
GET - /produtos/categorias
Retorna a lista de categorias de produtos disponíveis

GET - /produtos
Retorna todos os objetos de produtos cadastrados

POST - /produtos
Envia o objeto produto:

produto = {
    "id": 1,
    "categoria": "shampoo",
    "marca": "Euroda",
    "linha": "Siage Affinité 3D",
    "descricao": "Cor: Preto 50"
}

produto = {
    "id": 1,
    "categoria": "coloração",
    "marca": "Embelleza",
    "linha": "natucor naturalmente sofisticada",
    "descricao": "Cor: 1.110 Azeite de oliva negra - Preto intenso profundo - Tintura permanente Perfeita cobertura",
    "conteudo": "12",
    "medida": "g"
}        
     


//SERVIÇOS
GET - /servicos/nomes
Retorna uma lista de servicos 

//CLIENTES
GET - /clientes/nomes
Retorna uma lista de nomes de clientes