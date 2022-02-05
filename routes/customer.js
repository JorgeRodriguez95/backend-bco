const { Router } = require('express');

const { getCustomers, createCustomer } = require('../controllers/customer')
const { validatorJWT } = require('../middlewares/validator-jwt')

const router = Router();

router.get( '/', validatorJWT, getCustomers
);

router.post( '/', 
    [

    ],
    createCustomer
);

module.exports = router;
