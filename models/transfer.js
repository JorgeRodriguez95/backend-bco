const { Schema, model } = require('mongoose');

const TransferSchema = Schema({

    beneficiaryBankAccount: {
        type: String,
        require: true
    },
    beneficiaryBank: {
        type: String,
        require: true
    },
    beneficiaryBankAccountType: {
        type: String,
        require: true
    },
    beneficiaryName: {
        type: String
    },
    beneficiaryDni: {
        type: String
    },
    remitterId: {
        type: String
    }
});

module.exports = model( 'Transfer', TransferSchema );

