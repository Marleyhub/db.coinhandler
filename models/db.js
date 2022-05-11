const Sequelize = require('sequelize') 
 // criando conexão com o banco de dados
const sequelize = new Sequelize('coinhandler', 'root', '20021976',{
    host:'localhost', 
    dialect: 'mysql', // driver instalado myslq2
    query:{raw:true} //essa função resolveu o erro do handlebars "Access has been denied to resolve the property" e finalmente mostrou os dados do banco cadastrado 
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}