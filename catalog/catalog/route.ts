import express = require("express");
import { Router, Request, Response } from 'express';
import { Controller } from './controller';
import axios, {AxiosResponse } from "axios";

let router = express.Router(); 

router.get("/manga/:id",(req: Request, res: Response) => {
    const httpRequest = Controller.getManga(req.params.id);
    httpRequest.then(result => {
        res.send(result.data); 
    })
        .catch(error => {
            res.send("ERREUR : "+error).status(500);
        })

});

router.get("/anime/:id",(req: Request, res: Response) => {
    const httpRequest = Controller.getAnime(req.params.id);
    httpRequest.then(result => {
        res.send(result.data); 
    })
        .catch(error => {
            res.send("ERREUR : "+error).status(500);
        })

});

router.get("/all_anime",(req: Request, res: Response) => {
    const httpRequest = Controller.getAllAnime();
    httpRequest.then(result => {
        res.send(result.data); 
    })
        .catch(error => {
            res.send("ERREUR : "+error).status(500);
        })

});

router.get("/all_manga",(req: Request, res: Response) => {
    const httpRequest = Controller.getAllManga();
    httpRequest.then(result => {
        res.send(result.data); 
    })
        .catch(error => {
            res.send("ERREUR : "+error).status(500);
        })

});

export = router;