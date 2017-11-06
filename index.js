var express = require('express');
var app = express();

app.use(express.static('assets'));
 
app.get('/', function (req, res) {
  res.render("portada");
})


 
app.listen(process.env.PORT,process.env.IP);