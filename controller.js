var express = require('express');
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');
const fs = require('fs');
var mysql = require('mysql');




var con = mysql.createConnection({
  host: "db.it.pointpark.edu",
  user: "uno",
  password: "uno",
});


var modules = require('./lib/modules.js');

var app = express();

app.use(express.static(__dirname + "/style"));
app.use(express.static(__dirname + "/images"));
app.use(express.static(__dirname + '/public')); 
app.use(express.static(__dirname + '/videos')); 

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.set('port', process.env.PORT || 3000);


app.get('/', function(req, res) {
 res.render('home');

});
app.get('/about', function(req, res) {
 res.render('about');

});
app.get('/contact', function(req, res) {
 res.render('contact');

});
app.get('/meetings', function(req, res) {
 res.render('meeting');

});
app.get('/rules', function(req, res) {
 res.render('rules');

});


app.use(function(req, res, next){
    res.status(404);
    res.render('404');
});
app.use(function(err, req, res, next){
   console.log(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function(){
 console.log( 'Express started on http://localhost:' +
 app.get('port') + '; press Ctrl-C to terminate.' );
    
});

