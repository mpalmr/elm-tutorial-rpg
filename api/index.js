'use strict';
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');

server.use(jsonServer.defaults());
server.use(router);

console.log('Listening at port 4000');
server.listen(4000);