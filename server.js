const http = require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end('<h1>Hello World..!</h1>');
    console.log("Server Working Fine..!");
    

}).listen(4000);