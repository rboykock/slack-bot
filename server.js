var http = require('http')
var port = process.env.BOT_PORT || 3000;

http.createServer(function(req,resp){
    resp.writeHead(200,{'Content-Type': 'text/plain'});
    resp.end('Hello world!');
}).listen(port);
console.log("Bot started on http://127.0.0.1:"+port);