var express = require('express');
var app = express();
const PORT = process.env.PORT || 5000;

app.get('/', function (req, res) {
  res.send(Math.floor(Date.now() / 1000));
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
