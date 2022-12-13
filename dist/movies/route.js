"use strict";
const express = require("express");
const controller_1 = require("./controller");
let router = express.Router();
router.get("/movie_info/:id", (req, res) => {
    const httpRequest = controller_1.Controller.getDetails(req.params.id);
    httpRequest.then(result => {
        res.send(result.data);
    })
        .catch(error => {
        res.send(error).status(500);
    });
});
router.get("/anime_info/:id", (req, res) => {
    const httpRequest = controller_1.Controller.getDetails(req.params.id);
    httpRequest.then(result => {
        res.send(result.data);
    })
        .catch(error => {
        res.send(`${process.env.ANIME_API_DETAILS}` + error).status(500);
    });
});
router.get("/manga_info/:id", (req, res) => {
    const httpRequest = controller_1.Controller.getDetails(req.params.id);
    httpRequest.then(result => {
        res.send(result.data);
    })
        .catch(error => {
        res.send(error).status(500);
    });
});
module.exports = router;
