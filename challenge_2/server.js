const express = require('express');
const app = express();
const parser = require('body-parser');
const csvHelpers = require('./csvHelpers/csvHelpers.js');

app.use(express.static('client'));
app.use(parser.json());

const port = 8080;

app.get('/', function(req, res) {
  console.log('get');
  res.send();
});

app.post('/', function(req, res) {
  var csv = req.body.csv;
  var formattedCsv = csvHelpers.formatCsv(csv)
  console.log(formattedCsv);
  res.send(formattedCsv);
});


app.listen(port);