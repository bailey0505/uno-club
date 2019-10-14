var express = require('express');
var exphbs  = require('express-handlebars');
const fs = require('fs');

var modules = require('./lib/modules.js');

var app = express();

app.use(express.static(__dirname + "/style"));
app.use(express.static(__dirname + "/images"));
app.use(express.static(__dirname + '/public')); 



app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);


app.get('/', function(req, res) {
 res.render('home');

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

