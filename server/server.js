const express = require('express');
const morgan = require('morgan');

const app = express();
var requestCount = 0;

app.use(morgan('dev'));
app.use(express.static('public'));

app.use(function(req, res, next){
  requestCount++
  console.log('Request Count: '+ requestCount);
  next();
});

app.get('/', function(req, res) {
  res.render('index');
});

app.get('*', function(req, res){
  res.status(404).send('Sorry, no page found');
});

module.exports = app;