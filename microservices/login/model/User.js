const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('accounts', {

    client_email: {
        type: Sequelize.STRING
    },

    client_password: {
        type: Sequelize.STRING
    },    

    token: {
        type: Sequelize.STRING
    },

})

module.exports = User;