const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const mongoose = require('mongoose');

mongoose.model("User", {
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
});

const User = mongoose.model("user", userSchema);

module.exports = User;