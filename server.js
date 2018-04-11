var express = require('express');
var mime_type = require('./mime_type')

var port = process.env.BOT_PORT || 3000;

var app = express();

app.set('port',port)

app.get('/',function(req,res){
   res.type(mime_type.APPLICATION_TYPE_TEXT);
   res.send('Hello world !!!')
});

app.use(function(req,res){
    res.type(mime_type.APPLICATION_TYPE_TEXT);
    res.status(404);
    res.send('404 - Not found')
});

app.use(function(err,req,res,next){
    console.error(err.stack);
    res.type(mime_type.APPLICATION_TYPE_TEXT);
    res.status(500);
    res.send('500 - Server error');
});

app.listen(app.get('port'),function(){
    console.log('Server run on http://127.0.0.1:'+port);
});