const Transfer = require('../models/transfer')
const { validationResult  } = require('express-validator'); 

const getTransfers = async (req, res) => {

    const transfers = await Transfer.find();

    res.json({
        ok: true,
        transfers
    });
}

const createTransfer = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { beneficiaryBankAccount, beneficiaryBank, beneficiaryBankAccountType, beneficiaryName, beneficiaryDni, remitterId } = req.body;

    const transfer = new Transfer( req.body ); 

    await transfer.save();

    res.json({
        ok: true,
        transfer
    });
}

module.exports = {
    getTransfers,
    createTransfer
}