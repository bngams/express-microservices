"use strict";
const express = require("express");
const controller_1 = require("./controller");
const xml2js = require("xml2js");
let router = express.Router();
router.get("/catalog/anime/:id", (req, res) => {
    const httpRequest = controller_1.Controller.getAnimeCatalogue(req.params.id);
    httpRequest.then(result => {
        res.send(result.data);
    })
        .catch(error => {
        res.send("Erreur service 1 : " + error).status(500);
    });
});
router.get("/catalog/manga/:id", (req, res) => {
    const httpRequest = controller_1.Controller.getMangaCatalogue(req.params.id);
    httpRequest.then(result => {
        res.send(result.data);
    })
        .catch(error => {
        res.send("Erreur service 1 : " + error).status(500);
    });
});
router.get("/catalog/anime", (req, res) => {
    const httpRequest = controller_1.Controller.getCatalogueAnime();
    httpRequest.then(result => {
        xml2js.parseString(result.data, (err, jsonFile) => {
            if (err) {
                res.send("Erreur parse service 1 : " + err).status(500);
            }
            res.send(JSON.stringify(jsonFile, null, 4));
        });
    })
        .catch(error => {
        res.send("Erreur service 1 : " + error).status(500);
    });
});
router.get("/catalog/manga", (req, res) => {
    const httpRequest = controller_1.Controller.getCatalogueManga();
    httpRequest.then(result => {
        xml2js.parseString(result.data, (err, jsonFile) => {
            if (err) {
                res.send("Erreur parse service 1 : " + err).status(500);
            }
            res.send(JSON.stringify(jsonFile, null, 4));
        });
    })
        .catch(error => {
        res.send("Erreur service 1 : " + error).status(500);
    });
});
router.get("/catalog", (req, res) => {
    res.send("Bienvenue dans mon API catalogue MANGA </br> Lien vers l'api : https://cdn.animenewsnetwork.com");
});
module.exports = router;
