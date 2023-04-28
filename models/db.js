const Sequelize = require('sequelize');
//Conexãocomobancodedados
const sequelize = new Sequelize('projeto1','root','',{
    host:"localhost",
    port:"3306",
    dialect:'mysql'
});
//Vamosexportarasvariáveis
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}