const fs = require('fs');
const http = require('http');


http.createServer((req,res)=>{
    console.log("Server is Created..!");
    
//  Read File Data 
    fs.readFile('index.html',(err,data)=>{
        res.writeHead(200,{'content-type':'text/html'})
        res.write(data);
        return res.end();
    });

// Insert/Append Data
// fs.appendFile('index.html','<h3>This is H3 Tag</h3>',(err,data)=>{
//     if(err) throw err;
//     console.log("File Updated");
//     return res.end();
    
// })

// Delete File 
// fs.unlink('index.html',(err)=>{
//     if(err) throw err;
//     console.log("File Deleted");
//     return res.end();
    
// })

//  open file 
fs.open('server2.js','r',(err)=>{
    if(err) throw err;
    console.log("------------File Opened..!");
    return res.end();
    
})
    
}).listen(2000);
