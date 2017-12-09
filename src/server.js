import express from 'express';
import bodyParser from 'body-parser';
import * as db from './db';
import { loadavg } from 'os';
import { addinfo } from './db';

const app = express();

  app.use(bodyParser.json());

  app.get('/allinfo', function (req, res) { // Выдача всех данных на начало
    console.log('get temp');
    db.allinfo('hbhbb'/*mac*/).then(t => {
      console.log(t)
      res.json(t);
    })
  });

  app.get('/user', function (req, res) { // Выдача всех данных на начало
    console.log('get user');
    db.macuser(/*'dasha1925','1234'*/value).then(t => {
      console.log(t)
      res.json(t);
    })
  });

  app.post('/tempinfo', function (req, res) { // Выдача данных о температуре
    db.infotemp(value).then(t => {
      console.log(t)
      res.json(t);
    })
  });
  
  app.get('/arduinoinfo', function (req, res) { // Запись данных с Arduino
    const values = {
      mac:'hbhbb',
      temp:26,
      press:725,
      hum:25,
      gas:300,
      date: new Date(2017,12,9,17,5,3)
    }

    db.addinfo(/*req.body.*/values)
      console.log('req',req.body);
      console.log('POST temp');
  });

  app.get('/presinfo', function (req, res) { // Выдача данных о давлении
    db.infopress(value).then(t => {
      console.log(t)
      res.json(t);
    })
  });

  app.get('/gasinfo', function (req, res) { // Выдача данных о состоянии газа
    db.infogass(value).then(t => {
      console.log(t)
      res.json(t);
    })
  });  

  app.get('/huminfo', function (req, res) { // Выдача данных о влажности
    db.infohum(value).then(t => {
      console.log(t)
      res.json(t);
    })
  }); 

  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
