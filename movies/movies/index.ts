import { config } from 'dotenv';
import express = require('express');

config();

const app = express(); 
const port = 8002;
import router = require('./route');
app.use(router);
app.listen(port, function() { console.log('Server listening on: ' + port); });