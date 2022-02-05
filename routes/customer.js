const { Router } = require('express');

const { getCustomers, createCustomer } = require('../controllers/customer')

const router = Router();

router.get( '/', getCustomers
);

router.post( '/', 
    [

    ],
    createCustomer
);

module.exports = router;
