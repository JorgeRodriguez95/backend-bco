const { Schema, model } = require('mongoose');

const CustomerSchema = Schema({

    customerName: {
        type: String,
        require: true
    },
    customerRut: {
        type: String,
        require: true
    },
    customerEmail: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
});

module.exports = model( 'Customer', CustomerSchema );