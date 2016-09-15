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

// get todos
app.get('/todos' , function(req , res ){
	res.json(todos);
});

//get todos /:id
app.get('/todos/:id' , function(req , res ){

	var todoid = parseInt(req.params.id,10);
	var matchedtodo;

	todos.forEach(function(obj){
		if(todoid === obj.id){
			matchedtodo = obj;
		}
	});

	if(matchedtodo){
		res.json(matchedtodo);
	}else{
		res.status(404).send();
	}
});

app.listen(port , function(){
	console.log('server start :-'+ port + '!')
});