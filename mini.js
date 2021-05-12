/**
 * Created by Administrator on 2015/3/20.
 */
var express = require('express');
var router = require('./router');
var app = express();
var port = 8082;
app.use('/', router);
app.listen(port, function(){
    console.log('Server is listening on port: '+port);
});