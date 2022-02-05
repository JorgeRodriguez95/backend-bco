const { Router } = require('express');

const { getBeneficiaries } = require('../controllers/beneficiary');

const router = Router();

router.get( '/', getBeneficiaries
);

module.exports = router;