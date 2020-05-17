const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/').
    all((req, res, next) => {
        res.statusCode == 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    }).
    get((req, res, next) => {
        res.end('Showing All the leaders');
    }).
    post((req, res, next) => {
        res.end('Adding leader ' + req.body.name + ' with ' + req.body.description);
    }).
    put((req, res, next) => {
        res.statusCode = 405;
        res.end('PUT method not allowed');
    }).
    delete((req, res, next) => {
        res.end('Deleting All leaders');
    });

leaderRouter.route('/:leaderId').
    all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-type','text-plain');
        next();
    }).
    get((req, res, next) => {
        res.end('Getting leader with leaderId ' + req.params.leaderId);
    }).
    post((req, res, next) => {
        res.statusCode = 405;
        res.end('POST method not supported');
    }).
    put((req, res, next) => {
        res.write('Updating leader with leaderId ' + req.params.leaderId + '\n');
        res.end('Getting leader ' + req.body.name + ' with ' + req.body.description);
    }).
    delete((req, res, next) => {
        res.end('Deleting leader with leaderId ' + req.params.leaderId);
    });


module.exports = leaderRouter;
