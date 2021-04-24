const http=require("http");
const fs = require("fs");

const server= http.createServer((req,res)=> {
  const data = fs.readFileSync("expressdemo/fakeapi.json","utf-8");
  const objdata = JSON.parse(data);
       
    
    if(req.url=="/"){
         
        res.writeHead(200,{"Content-type": "application/json"})
        res.end(data);
      }
  
});
server.listen(8080);
 
