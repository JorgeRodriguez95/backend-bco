const Transfer = require('../models/transfer')

const getTransfers = async (req, res) => {

    const transfers = await Transfer.find();

    res.json({
        ok: true,
        transfers
    });
}

const createTransfer = async (req, res) => {

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