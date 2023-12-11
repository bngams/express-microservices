
import express = require('express');
import { Router, Request, Response } from 'express';
import { Controller } from './controller';

import $ = require('jquery');
import xml2js = require('xml2js');

export const router = express.Router(); 

router.get("/catalog/anime/:id", (req, res) => {
    const httpRequest = Controller.getAnimeCatalogue(req.params.id); 
    httpRequest.then(result => {
        res.send(result.data)
    })
    .catch(error => {
        res.send("Erreur service 1 : "+error).status(500);
    }) 
});

router.get("/catalog/manga/:id", (req: Request, res: Response) => {
    const httpRequest = Controller.getMangaCatalogue(req.params.id);
    httpRequest.then(result => {
        res.send(result.data)
    })
    .catch(error => {
        res.send("Erreur service 1 : "+error).status(500);
    }) 
});

router.get("/catalog/anime",(req: Request, res: Response) => {
    const httpRequest = Controller.getCatalogueAnime();
    httpRequest.then(result => {
        xml2js.parseString(result.data, (err, jsonFile) => {
            if (err) {
              res.send("Erreur parse service 1 : "+err).status(500);
            }
            res.send(JSON.stringify(jsonFile, null, 4))
        })
    })
    .catch(error => {
        res.send("Erreur service 1 : "+error).status(500);
    }) 

});

router.get("/catalog/manga",(req: Request, res: Response) => {
    const httpRequest = Controller.getCatalogueManga();
    httpRequest.then(result => {
        xml2js.parseString(result.data, (err, jsonFile) => {
            if (err) {
              res.send("Erreur parse service 1 : "+err).status(500);
            }
            res.send(JSON.stringify(jsonFile, null, 4))
        })
    })
    .catch(error => {
        res.send("Erreur service 1 : "+error).status(500);
    }) 

});

router.get("/catalog",(req: Request, res: Response) => {
    res.send("Bienvenue dans mon API catalogue MANGA </br> Lien vers l'api : https://cdn.animenewsnetwork.com"); 
});
