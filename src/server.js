var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var db = require('./db.js');


app.use(bodyParser.json());

app.post('/allinfo', function (req, res) { // Выдача всез данных на начало

  res.json('Hello World!');
  console.log('get temp');
});

app.post('/tempinfo', function (req, res) { // Выдача данных о температуре
    res.send('get temp');
    console.log('get temp');
  });
  
app.post('/arduinoinfo', function (req, res) { // Запись данных с Arduino
    // var a = req.json();
    //res.send('get temp');
    // console.log('req',JSON.stringify(req));
    console.log('req',req.body);

    // console.log('req',req.route);
    console.log('POST temp');
});

  app.get('/presinfo', function (req, res) { // Выдача данных о давлении
    res.send('get pressure');
  });
  app.get('/gasinfo', function (req, res) { // Выдача данных о состоянии газа
    res.send('get gas');
  });  
  app.get('/huminfo', function (req, res) { // Выдача данных о влажности
    res.send('get humidity');
  }); 
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
