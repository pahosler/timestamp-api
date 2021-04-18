var express = require('express');
var app = express();
const PORT = process.env.PORT || 5000;
const date =()=>Math.floor(Date.now() / 1000);

app.get('/', 
  function (req, res, next) {
    res.send(`${date()}`);
  }
);

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
