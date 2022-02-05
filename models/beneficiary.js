const { Schema, model } = require('mongoose');

const BeneficiarySchema = Schema({

    beneficiaryDni: {
        type: String
    },
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
        type: String,
        require: true
    },
    customerId: {
        type: String,
        require: true
    }
});

module.exports = model( 'Beneficiary', BeneficiarySchema );