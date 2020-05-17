const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/').
    all((req, res, next) => {
        res.statusCode == 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    }).
    get((req, res, next) => {
        res.end('Showing All the dishes');
    }).
    post((req, res, next) => {
        res.end('Adding dish ' + req.body.name + ' with ' + req.body.description);
    }).
    put((req, res, next) => {
        res.statusCode = 405;
        res.end('PUT method not allowed');
    }).
    delete((req, res, next) => {
        res.end('Deleting All dishes');
    });

dishRouter.route('/:dishId').
    all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-type','text-plain');
        next();
    }).
    get((req, res, next) => {
        res.end('Getting dish with dishId ' + req.params.dishId);
    }).
    post((req, res, next) => {
        res.statusCode = 405;
        res.end('POST method not supported');
    }).
    put((req, res, next) => {
        res.write('Updating dish with dishId ' + req.params.dishId + '\n');
        res.end('Getting dish ' + req.body.name + ' with ' + req.body.description);
    }).
    delete((req, res, next) => {
        res.end('Deleting dish with dishId ' + req.params.dishId);
    });


module.exports = dishRouter;
