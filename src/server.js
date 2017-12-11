import express from 'express';
import bodyParser from 'body-parser';
import * as db from './db';
import { loadavg } from 'os';
import { addinfo } from './db';

const app = express();

  app.use(bodyParser.json());

  app.post('/allinfo', function (req, res) { // Выдача всех данных на начало
    const value = {
      mac: rec.body.mac
    }
    db.allinfo(value/*mac*/).then(t => {
      console.log(t)
      res.json(t);
    })
  });

  app.post('/user', function (req, res) { // Выдача всех данных на начало
    const value = {
      login: rec.body.login,
      password: rec.body.password
    }
    db.macuser(/*'dasha1925','1234'*/value).then(t => {
      console.log(t)
      res.json(t);
    })
  });

  app.post('/tempinfo', function (req, res) { // Выдача данных о температуре
    const value = {
      mac: rec.body.mac,
      hours: rec.body.hours,
      datenow: Date.now()
    }
    db.infotemp(value).then(t => {
      console.log(t)
      res.json(t);
    })
  });
  
  app.post('/arduinoinfo', function (req, res) { // Запись данных с Arduino
    const values = {
      mac: rec.body.mac,
      temp: rec.body.temp,
      press: rec.body.press,
      hum: rec.body.hum,
      gas: rec.body.gas,
      date: Date.now()
    }
    db.addinfo(/*req.body.*/values)
      console.log('req',req.body);
      console.log('POST temp');
  });

  app.post('/presinfo', function (req, res) { // Выдача данных о давлении
    const value = {
      mac: rec.body.mac,
      hours: rec.body.hours,
      datenow: Date.now()
    }
    db.infopress(value).then(t => {
      console.log(t)
      res.json(t);
    })
  });

  app.post('/gasinfo', function (req, res) { // Выдача данных о состоянии газа
    const value = {
      mac: rec.body.mac,
      hours: rec.body.hours,
      datenow: Date.now()
    }
    db.infogass(value).then(t => {
      console.log(t)
      res.json(t);
    })
  });  

  app.post('/huminfo', function (req, res) { // Выдача данных о влажности
    const value = {
      mac: rec.body.mac,
      hours: rec.body.hours,
      datenow: Date.now()
    }
    db.infohum(value).then(t => {
      console.log(t)
      res.json(t);
    })
  }); 

  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
