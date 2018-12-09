var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/v1/contact/2', function(req, res){
	var data = {
		contactId: 1,
		firstName: 'John',
		lastName: 'Doe',
		email: 'john.doe@domain.com',
		phone: '23453245'
	};

	res.send(data);
});

app.get('/v1/contact:contactId', function(req, res){
	console.log('GET called');
	var data = {
		contactId: 2,
		firstName: 'Taylor',
		lastName: 'Swift',
		email: 'taylor.swift@domain.dom',
		phone: '11222'
	};

	res.send(data);
});

app.post('/v1/contact', function(req, res){
    res.send(req.body);
});

app.put('/v1/contact/:contactId', function(req, res){
    res.send(req.body);
});

app.delete('/v1/contact/:contactId', function(req, res){
	res.send({message: 'Record deleted.'});
});


app.listen(8000);
