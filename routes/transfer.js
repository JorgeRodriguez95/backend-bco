const { Router } = require('express');
const { body } = require('express-validator');
const { validator } = require('../middlewares/validator')

const { getTransfers, createTransfer } = require('../controllers/transfers')

const router = Router();


router.get( '/', getTransfers
);

router.post( '/', 
    [
        body('beneficiaryBankAccount', 'El beneficiaryBankAccount es obligatorio').not().isEmpty(),
        body('beneficiaryBank').not().isEmpty(),
        body('beneficiaryBankAccountType').not().isEmpty(),
        body('beneficiaryName').not().isEmpty(),
        body('beneficiaryDni').not().isEmpty(),
        body('remitterId').not().isEmpty(),
        validator
    ], 
    createTransfer
);

module.exports = router;