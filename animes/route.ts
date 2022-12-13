import { Router, Request, Response } from 'express';
import express = require('express');
import { Controller } from './controller';

let router = express.Router(); 

router.get("/anime_info/:id", (req: Request, res: Response) => {
    const httpRequest = Controller.getDetails(req.params.id);
    httpRequest.then(result => {
        res.send(result.data);
    })
        .catch(error => {
            res.send(error).status(500);
        })

});

router.get("/anime_info/:id", (req: Request, res: Response) => {
    const httpRequest = Controller.getDetails(req.params.id);
    httpRequest.then(result => {
        res.send(result.data);
    })
        .catch(error => {
            res.send(`${process.env.ANIME_API_DETAILS}`+ error).status(500);
        })

});

router.get("/manga_info/:id", (req: Request, res: Response) => {
    const httpRequest = Controller.getDetails(req.params.id);
    httpRequest.then(result => {
        res.send(result.data);
    })
        .catch(error => {
            res.send(error).status(500);
        })

});

export = router;