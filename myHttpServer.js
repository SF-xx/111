const http = require('http')
const fs=require('fs')
const url=require('url')
const querystring=require('querystring')
var i=0;

const server = http.createServer((req, res) => {
    //读取图标
    if(req.url=="/favicon.ico"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/img');
        fs.readFile("fav.jpg",(err,fsData)=>{
            if(err){
                console.log("Read file error.")
                throw err
            }
            //console.log("1")
            res.write(fsData);
            res.end();
        });  
        //console.log("2")
    }
    //首页显示form1.html
    else if(req.url=="/"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.readFile("fav.jpg",(err,fsData)=>{
            if(err){
                console.log("Read file error.")
                throw err
            }
            res.write(fsData);
            res.end();
        });
    }
    //点击按钮跳转
    else if(req.url.slice(0,6)=="/input"){
        res.statusCode = 200;
        //url1=new url;
        //let queryData=url1.parse(req.url,true).query; 
        res.setHeader('Content-Type', 'text/html');
        //res.write(queryData.name123);
        res.end("submit success!"); 
    }
    else{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        //res.write(req.url)
        res.write('<h1>This is Me.You are the '+i+'th visitor');
        res.end();
    }
    i++;
    console.log("This is my consolelog");
    });
    server.listen(3000);