var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    mongoose = require('mongoose'),
    app = express();

// middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

var routesProyectos = require('./routes/proyectos.js')(app);

mongoose.connect('mongodb://localhost/proyectos', function (err, res) {
  if (!err) {
    console.log('Conectado a la BBDD de proyectos');
  } else {
    console.log('ERROR: conectando a la BBDD. ' + err);
  }
});

app.listen(3000 , function () {
  console.log('Node server runnign on port 3000');
});
