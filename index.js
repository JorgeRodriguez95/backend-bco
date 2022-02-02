require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config')

const app = express();

app.use(cors());

app.use(express.json());

dbConnection();

app.use('/api/transfers', require('./routes/transfers'));

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});