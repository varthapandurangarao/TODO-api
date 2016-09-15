var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
 
 app.get('/',function(req , res){
 	res.send('<h1>TODO API ROOT!!!!<h1>');
 });

 app.listen(PORT , function(){
 	console.log('EXPRESS SERVER START' + PORT + '!')
 });