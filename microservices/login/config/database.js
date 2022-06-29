const { Sequelize } = require('sequelize');


module.exports = new Sequelize('db', 'root', 'password', {
    dialect: 'mysql',
    host: "localhost"
})