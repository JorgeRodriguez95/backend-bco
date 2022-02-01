const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
  
        await mongoose.connect(process.env.DB_URL);

        console.log('db arriba');

    }catch(err){

        console.log(err);
        throw new Error('Error db');

    }
}

module.exports = {
    dbConnection
}

