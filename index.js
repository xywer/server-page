var port_listen = 6969;
var port_mysql = 3306;
var puerto_io = 3000;
//----------ASIGNAR LA CONFIGURACION DE LA BDD(NOMBRE Y PUERTO Y PASS)---------
var params_bdd = {user: "pekesc5_meetclic", password: "meetclic@", host: "creativeweb.com.ec", port: port_mysql, database: "pekesc5_xywer"};
//var params_bdd = {user: "pekesc5_meetclic", password: "meetclic@", host: "creativeweb.com.ec", port: port_mysql, database: "pekesc5_lady"};
//*********************MYSQL*****************
//-------------------INIT MODULOS A UTILIZAR-------------
//MODULO DE NODE JS PARA LA CONECCION DE LA BDD DE MYSQL
var mysql = require('mysql');//para la comunicacion con la bdd 
var express = require('express')//EL ESL L ENCARGADO DE LA COMUNCION DE URLS 
        , cors = require('cors')//EL NOS FACILITA LA COMUNICACION A ESAS URLS  ACCESO A ESA URL
        , app = express();
app.use(cors());
var io = require('socket.io').listen(puerto_io);//REALIZA UN PUENTE ENTRE TU APP-SISTEMA DE GESTION ---COMUNICACION ENTRE LOS DOS HACIA TU SERVIDOR
//-------------------END MODULOS A UTILIZAR-------------

//--------CONECCCION DE LA BDD--------
var connection = mysql.createConnection(params_bdd);

//var express = require('express');
//var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


app.get('/personaInformacionAll', function (req, res, next) {
//    SELECT * FROM  persona_catalogo ORDER BY id DESC

        res.json("ALEX");

});