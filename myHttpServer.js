const http = require('http');
const fs=require("fs");
const url=require('url')
const querystring=require('querystring')
var i=0;

const server = http.createServer((req, res) => {
    //读取图标
    if(req.url=="/fav.jpg"){
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
        fs.readFile("form1.html",(err,fsData)=>{
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
        let url1=req.url.split("?");
        //let urlquery=url1[1].split("&");
        //let firstQuery=urlquery[0].split("=");
        //let secondQuery=urlquery[1].split("=");
        //let queryData=url1.parse(req.url,true).query; 
        //console.log(url1[1])
        let obQuery=querystring.parse(url1[1]);
        if(obQuery.submit1=="Save"){
            fs.writeFile('savefile',obQuery.name,(err) =>{
                if(err) 
                    console.log("Write file err!")
                else 
                    console.log("Write file success!") 
            });
        }
        else{
            fs.appendFile('savefile',obQuery.name,(err) =>{
                if(err) 
                    console.log("Appendsave file err!")
                else 
                    console.log("Appendsave file success!") 
            });
        }
        // fs.writeFile("/home/sixteen/111/text.txt",obQuery.name, error =>{
        //     if(error)
        //         return console.log("写入文件失败，原因是"+ error.message);
        //         console.log("写入成功");
        // });
        //console.log(obQuery)
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.readFile("form1.html",(err,fsData)=>{
            if(err){
                console.log("Read file error.")
                throw err
            }
            res.write(fsData);
            res.end();
        });
        // res.setHeader('Content-Type', 'text/html');
        // res.write(obQuery.name+"<br>");
        // res.write(obQuery.submit1+"<br>");
        // res.end("submit success!"); 
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