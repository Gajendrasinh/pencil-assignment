const express = require('express');
require('dotenv').config()
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const { API_PORT } = process.env;
const router = require('./routes/index');

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', router);

app.listen(API_PORT, () => {
    console.log(`Server is listening on port ${API_PORT}`);
})