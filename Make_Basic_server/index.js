
const http = require('http')

// http.createServer((req , resp)=>{
//     resp.write("Hello, This is first basic server");
//     resp.end()

// }).listen(4500)

//Another method to creat serever

//Routing

//Step 1: create server
const fs = require('fs')
const html = fs.readFileSync('./index.html','utf-8')
const server = http.createServer((request, response)=>{

    let path = request.url

    if(path === '/' || path.toLocaleLowerCase() === '/home'){
        response.end(html.replace('{{%CONTENT%}}', 'You are in Home page'));
    }else if(path.toLocaleLowerCase() === '/about'){
        response.end(html.replace('{{%CONTENT%}}', "You are in About page"));
    }else if(path.toLocaleLowerCase() === '/contact'){
        response.end(html.replace('{{%CONTENT%}}', "You are in Contact page"));
    }else{
        response.end(html.replace('{{%CONTENT%}}',"Error 404: Page not found"));
    }

});
//Step 2: Start server
server.listen(8000,'127.0.0.1', ()=>{
    console.log('server has started')
})