const Sequelize = require('sequelize');
const db = require('./config/database');

const Account = db.define('account', {
    client_firstname: {
        type: Sequelize.STRING
    },

    client_lastname: {
        type: Sequelize.STRING
    },

    client_email: {
        type: Sequelize.STRING
    },

    client_phonenumber: {
        type: Sequelize.NUMBER
    },

    client_address: {
        type: Sequelize.STRING
    },

    client_referralcode: {
        type: Sequelize.NUMBER
    },

    client_password: {
        type: Sequelize.STRING
    },

    client_status: {
        type: Sequelize.NUMBER
    },
})

module.exports = Account;