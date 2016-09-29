var express = require('express');


var app = express();
var PORT = process.env.PORT || 3000;

var todos = [{
		id:1,
		description: 'Study algo and C',
		completed: false
	},
	{
		id: 2,
		description: 'Complete Node today',
		completed: false
	},
	{
		id: 3,
		description: 'Start learning node and react',
		completed: true
	}
];

app.get('/',function(req, res){
	res.send('todo_api_root');
});

//Get /Todos

app.get('/todos', function(req, res){
	res.json(todos);
});

app.get('/todos/:id', function(req, res){
	var todoId = parseInt(req.params.id, 10);
	var matchedTodo;

	todos.forEach(function(todo){
		if(todoId === todo.id){
			matchedTodo = todo;
		}
	});

	if(matchedTodo){
		res.json(matchedTodo);
	}
	else{
		res.status(404).send();
	}

	res.status(404).send()
	res.send('Asking for todo with id of '+ req.params.id)
});

app.listen(PORT, function(){
	console.log('express listening on port '+PORT+ ' !');
});