
//PUERTO DONDE VA A CORRER EL SERVIDOR 
//WEB SERVICES
////
//****************CORS **************
//https://github.com/expressjs/cors
// ES UN MODULO PARA PODER DAR PERMISOS
//DE ACCESO AL SERVIDOR
//Y PODER 
//***********************EXPRESS*****************
//En esta introducci�n a la programaci�n as�ncrona con Node.js 
//vamos a introducirnos en el desarrollo web con express.js. 
//  Express est� construido sobre Connect un framework extensible de 
//  manejo de servidores HTTP que provee de
//plugins de alto rendimiento conocidos como middleware.
//---------VARIABLES GLOBALES----------

var port_listen = 6969;
var port_mysql = 3306;
var puerto_io = 3000;
var connection;//objeto para la coneccion
//----------ASIGNAR LA CONFIGURACION DE LA BDD(NOMBRE Y PUERTO Y PASS)---------
var params_bdd = {user: "pekesc5_meetclic", password: "meetclic@", host: "creativeweb.com.ec", port: port_mysql, database: "pekesc5_xywer"};
//*********************MYSQL*****************
//-------------------INIT MODULOS A UTILIZAR-------------
//MODULO DE NODE JS PARA LA CONECCION DE LA BDD DE MYSQL
var mysql = require('mysql');//para la comunicacion con la bdd 
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    response.render('pages/index');
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});


app.get('/personaInformacionAll', function (req, res, next) {
//    SELECT * FROM  persona_catalogo ORDER BY id DESC

    res.json("ALEX");

});

function initConection() {
    //--------init CONECCCION DE LA BDD--------
    var connection = mysql.createConnection(params_bdd);
//--------end CONECCCION DE LA BDD--------
//---END PERSONA--
    connection.connect(function (err) {
        if (err) {
            console.log('---------------------------------------Error connecting to Db------------------', err);
            return;
        } else {

            console.log('----------------------Connection established--------------------------');
        }

    });
    connection.end();
}