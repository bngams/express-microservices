import express from 'express';
import { config } from 'dotenv';
// importer mon router
import { router } from './route';

// charger le .env
config();

// charge le server
const app = express(); 

// utiliser la variable d'env via l'api node process.env
app.use(router);

// brancher le server sur un port
const port = process.env.API_GATEWAY_PORT || 8000;
app.listen(port, function() { console.log('Server listening on: ' + port); });
