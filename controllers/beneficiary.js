const Beneficiary = require('../models/beneficiary')
const { validationResult  } = require('express-validator');

const getBeneficiaries = async (req, res) => {

    const beneficiaries = await Beneficiary.find();

    res.json({
        ok: true,
        beneficiaries
    });
}

module.exports = {
    getBeneficiaries
}