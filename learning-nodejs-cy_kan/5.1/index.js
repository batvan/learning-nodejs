var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/ajaxcall', function(req, res){
	var data = {
		contactId: 1,
		firstName: 'John',
		lastName: 'Doe',
		email: 'john.doe@domain.com',
		phone: '23453245'
	};

	res.send(data);
});

app.listen(8000);