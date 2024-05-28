'use strict';
var
    http = require('http'),
    express = require('express'),
    app = express(),
    server = http.createServer(app);
var cors = require('cors');

app.use(cors());

app.get('/', function (request, response) {
    response.send('Hello My Express!!!!');
});


server.listen(3000);
console.log(
    'Express server listening on port %d in %s mode',
    server.address().port, app.settings.env
);

