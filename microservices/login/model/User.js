const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('accounts', {

    client_firstname: {
        type: Sequelize.STRING
    },

    client_email: {
        type: Sequelize.STRING
    },

    client_password: {
        type: Sequelize.STRING
    },    

    client_status: {
        type: Sequelize.NUMBER
    },

})

module.exports = User;