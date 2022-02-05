const { Router } = require('express');
const { body } = require('express-validator');
const { login } = require('../controllers/auth');
const { validator } = require('../middlewares/validator')


const router = Router();

router.post('/', 
    [
        body('customerEmail', 'El email es obligatorio').not().isEmpty(),
        body('password', 'El password es obligatorio').not().isEmpty(),
        validator
    ],
    login
);

module.exports = router;