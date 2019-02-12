require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const massive = require('massive');

const {SERVER_PORT} = process.env;

const app = express();
app.use(json());

app.listen(SERVER_PORT, () => console.log(`Coding is happening on port ${SERVER_PORT}`))