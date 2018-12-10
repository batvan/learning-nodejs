var express = require('express');

var profileRouter = express.Router();

profileRouter.get('/', function(req, res){
	res.render('pages/contacts');
});

module.exports = profileRouter;

