require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config')

const app = express();

app.use(cors());

app.use(express.json());

dbConnection();

app.use('/api/transfers', require('./routes/transfer'));
app.use('/api/customers', require('./routes/customer'));
app.use('/api/beneficiaries', require('./routes/beneficiary'));
app.use('/api/login', require('./routes/auth'));

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});