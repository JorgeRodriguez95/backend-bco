const { response } = require('express');
const res = require('express/lib/response');
const bcrypt = require('bcryptjs')
const { generateJWT } = require('../helpers/jwt');

const Customer = require('../models/customer')

const login = async(req, res = response ) =>{

    const { customerEmail, password } = req.body;

    try {

        const customerDb = await Customer.findOne( { customerEmail } );

        if(!customerDb){
            return res.status(404).json({
                ok: false,
                msg: 'Usuario no existe'
            });
        }

        const validPassword = bcrypt.compareSync( password, customerDb.password );

        if(!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'Contraseña incorrecta'
            });
        }

        
        const token = await generateJWT(customerDb.id);

        res.json({
            ok: true,
            customerDb,
            token
        })

    }catch(error){
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error en el Login'
        })
    }
}

module.exports = {
    login
}