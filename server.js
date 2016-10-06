var morgan = require('morgan');
var path = require('path');
//app.use(morgan('combined'));
var express=require('express');
var app=express();

app.use(express.static('ui'));
app.get('/',function(req,res){
	res.sendFile(__dirname + '/ui/index.html');
});


/* one way of including css
app.get('/css/style.css',function(req,res){
	res.sendFile(__dirname + '/css/style.css');
});*/

app.listen(8080,function(){
	console.log('app is listening on 8080 !');
});
