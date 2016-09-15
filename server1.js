var express = require ('express');
var app = express();
var port = process.env.port || 8080;

var todos = [{
	id : 1,
	description : 'go to lunch',
	completed : false
},{
	id : 2,
	description : 'go to market',
	completed : false
},{
	id : 3,
	description : 'buy something',
	completed : true

}];
app.get('/' , function(req , res ){
	res.send('<h1>TODO API ROOT<h1>')
});

app.get('/todos' , function(req , res ){
	res.json(todos);
});

app.listen(port , function(){
	console.log('server start :-'+ port + '!')
});