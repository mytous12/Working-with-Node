const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/').
    all((req, res, next) => {
        res.statusCode == 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    }).
    get((req, res, next) => {
        res.end('Showing All the promotions');
    }).
    post((req, res, next) => {
        res.end('Adding promotion ' + req.body.name + ' with ' + req.body.description);
    }).
    put((req, res, next) => {
        res.statusCode = 405;
        res.end('PUT method not allowed');
    }).
    delete((req, res, next) => {
        res.end('Deleting All promotions');
    });

promoRouter.route('/:promoId').
    all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-type','text-plain');
        next();
    }).
    get((req, res, next) => {
        res.end('Getting promotion with promoId ' + req.params.promoId);
    }).
    post((req, res, next) => {
        res.statusCode = 405;
        res.end('POST method not supported');
    }).
    put((req, res, next) => {
        res.write('Updating promotion with promoId ' + req.params.promoId + '\n');
        res.end('Getting promotion ' + req.body.name + ' with ' + req.body.description);
    }).
    delete((req, res, next) => {
        res.end('Deleting promotion with promoId ' + req.params.promoId);
    });


module.exports = promoRouter;
