const Customer = require('../models/customer')
const bcrypt = require('bcryptjs')

const getCustomers = async (req, res) => {

    const customers = await Customer.find();

    res.json({
        ok: true,
        customers
    });
}

const createCustomer = async (req, res) => {

    const { email, password } = req.body;

    try {

        const isPresent = await Customer.findOne( { email });

        if(isPresent){
            return res.status(400).json({
                ok: false,
                msg: 'Email ya registrado'
            })
        }
        
        const customer = new Customer( req.body ); 

        //bcrypt
    
        const salt = bcrypt.genSaltSync();
        
        customer.password = bcrypt.hashSync( password, salt);
    
        await customer.save();
    
        res.json({
            ok: true,
            customer
        });

    }catch(error){
        console.log(error);
    }
}


module.exports = {
    getCustomers,
    createCustomer
}