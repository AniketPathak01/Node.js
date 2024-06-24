
const http = require('http')

http.createServer((req , resp)=>{
    resp.write("Hello, This is first basic server");
    resp.end()

}).listen(4500)