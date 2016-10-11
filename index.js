
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
var port_listen = 5000;
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
//---VERIFICAR SI EXISTE UN PUERTO--
//en PRODUCCION CAMBIA EL PUERTO DEFINIDO X UNO
if (process.env.PORT) {
    port_listen = process.env.PORT;
    console.log("puerto a ejecutar", port_listen);
}
console.log("--------------puerto configurado-------------", port_listen);
app.set('port', port_listen);

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    response.render('pages/index');
});

app.listen(app.get('port'), function () {
    console.log('--------------------NODE---------------------');
    console.log('--------------------PUERTO---------------------', app.get('port'));
});
//TABLAS GESTION NAMES
var tbl_persona = "persona";
var tbl_persona_informacion = "persona_informacion";

app.get('/personaInformacionAll', function (req, res, next) {

//    connection = initConection();
//    if (connection) {//se creo la conexion
//        var query_string = "SELECT * FROM  " + tbl_persona + " t  ";
//        var objec_conection_bdd = connection;
//        var params_data = {query_string: query_string, objec_conection_bdd: objec_conection_bdd};
//        getDataModel(params_data, function (data) {
//
//            if (data.length == 0) {
//                res.json({success: true, "msj": "Conecccion Valida", data: data});
//                closeBdd(connection);
//                closeBddVerificar(connection);
//            } else {
//
//            }
//
//        });
//    } else {
//        res.json({success: false, "msj": "No se pudo realizar la coneccion"});
//    }

});

function initConection() {
    //--------init CONECCCION DE LA BDD--------
    var object = {};
    object = mysql.createConnection(params_bdd);
    object.connect(function (err) {
        if (err) {
            console.log('---------------------------------------Error connecting to Db------------------', err);
            return false;
        } else {

            console.log('----------------------Connection established--------------------------');
        }

    });
    return object;
}
function closeBddVerificar(object) {

    object.on('close', function (err) {
        if (err) {
            // Oops! Unexpected closing of connection, lets reconnect back.
            object = mysql.createConnection(connection.config);
        } else {
            console.log('Connection closed normally.');
        }
    });
}
function closeBdd(object) {
    object.end();
}
function getDataModel($params, callback) {
    var result;
    var query_string = $params.query_string;
    var objec_conection_bdd = $params.objec_conection_bdd;
    objec_conection_bdd.query(query_string, function (err, rows, fields) {
        if (err) {
            throw err;
        }
        // Pass the message list to the view
        else {
            console.log("primero informacion");
            result = rows;
            callback(result);
        }
    });
    return result;
}