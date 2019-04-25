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
    "marca": "Loreal",
    "linha": "Kids",
    "descricao": "Shampoo sem sal, ph, etc"
    "conteudo": "1000",
    "medida": "ml"
}        
        
//SERVIÇOS
GET - /servicos/nomes
Retorna uma lista de servicos 

//CLIENTES
GET - /clientes/nomes
Retorna uma lista de nomes de clientes