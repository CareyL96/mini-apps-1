const express = require('express');
const parser = require('body-parser');
const csvHelpers = require('./csvHelpers/csvHelpers.js');
const app = express();

app.use(express.static('client'));
app.use(parser.json());

const port = 8080;

// app.get('/', function(req, res) {
//   res.send();
// });

app.post('/', function(req, res) {
  var csv = req.body.csv;
  console.log('SERVER: receiving information (req.body) as - ' + typeof req.body)
  console.log('SERVER: receiving req.body.csv - ' + typeof req.body.csv)
  var formattedCsv = csvHelpers.formatCsv(csv)
  console.log('SERVER: sending information back as - ' + typeof formattedCsv);
  res.send(formattedCsv);
});


app.listen(port);