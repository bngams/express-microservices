"use strict";
const express = require("express");
const controller_1 = require("./controller");
let router = express.Router();
router.get("/manga/:id", (req, res) => {
    const httpRequest = controller_1.Controller.getManga(req.params.id);
    httpRequest.then(result => {
        res.send(result.data);
    })
        .catch(error => {
        res.send("ERREUR : " + error).status(500);
    });
});
router.get("/anime/:id", (req, res) => {
    const httpRequest = controller_1.Controller.getAnime(req.params.id);
    httpRequest.then(result => {
        res.send(result.data);
    })
        .catch(error => {
        res.send("ERREUR : " + error).status(500);
    });
});
router.get("/all_anime", (req, res) => {
    const httpRequest = controller_1.Controller.getAllAnime();
    httpRequest.then(result => {
        res.send(result.data);
    })
        .catch(error => {
        res.send("ERREUR : " + error).status(500);
    });
});
router.get("/all_manga", (req, res) => {
    const httpRequest = controller_1.Controller.getAllManga();
    httpRequest.then(result => {
        res.send(result.data);
    })
        .catch(error => {
        res.send("ERREUR : " + error).status(500);
    });
});
module.exports = router;
