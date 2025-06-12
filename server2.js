const http = require('http');
const cc = require('change-case');

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.write(cc.constantCase('Hello World this is NodeJs.Nodemon is running..!'))
    res.end();
    console.log("Server Working Fine..!");
    

}).listen(4000);