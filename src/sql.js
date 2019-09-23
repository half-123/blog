const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.listen(3001,()=>console.log("服务启动"))

app.post('/add',(req,res)=>{
    var html = req.body.html;
    var md = req.body.md;
    var title = req.body.title;
    var tips = req.body.tips;
    title=title.replace(/"/g, "\\\"")
    title=title.replace(/'/g,"\\\'")
    md=md.replace(/"/g, "\\\"")
    md=md.replace(/'/g,"\\\'")
    console.log(md);
    html=html.replace(/"/g, "\\\"")
    html=html.replace(/'/g, "\\\'")
    var connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'123456',
        database:'blog'
    });
    connection.connect();
    var sql = "insert into note (title,md,html,tips) values ('"+title+"','"+md+"','"+html+"','"+tips+"')";
    console.log(sql);
    connection.query(sql,(err,rows,fields)=>{
        if(err){
            console.log(err);
        }
        connection.end();
    });
});


app.get('/list',(req,res)=>{
    console.log("get list");
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header("Content-Security-Policy: upgrade-insecure-requests");
    var connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'123456',
        database:'blog'
    });
    connection.connect();
    var sql = "select * from note";
    connection.query(sql,(err,result)=>{
        if(err){
            console.log(err);
        }
        connection.end();
        res.send(result)
    });
})

app.get('/items',(req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    var type = req.query.type;
    var connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'123456',
        database:'blog'
    });
    connection.connect();
    var sql = "select * from note where tips like '%"+type+"%'";
    connection.query(sql,(err,result)=>{
        if(err){
            console.log(err);
        }
        connection.end();
        res.send(result)
    });
})
app.get('/item',(req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    var id = req.query.id;
    var connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'123456',
        database:'blog'
    });
    connection.connect();
    var sql = "select * from note where id="+id;
    connection.query(sql,(err,result)=>{
        if(err){
            console.log(err);
        }
        connection.end();
        res.send(result)
    });
})



