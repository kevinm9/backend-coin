/* Api monedas
   Versión: 0.1
   Autor: Kevin Mosquera 
   Descripcion: tiene los metodos de muestrar las monedas y guardarlas
*/

// Importación de los paquetes necesarios para el proyecto.

const mysql = require('mysql');  
const express = require('express');  
var app = express();  
const bodyparser = require('body-parser'); 
const cors = require('cors'); 
const { body, validationResult } = require('express-validator'); 

// Configurar cabeceras y cors
app.use(cors())

 // Se utiliza para enviar los datos Json a la API 
app.use(bodyparser.json());  
  
// Cadena de conexión a la base de datos 
var mysqlConnection = mysql.createConnection({  
    host: 'localhost',  
    user : 'root',  
    password : '',   
    database : 'moneda_kmosquera',  
    multipleStatements : true  
});  
  
// Para verificar si la conexión es exitosa 
mysqlConnection.connect((err) => {  
    if(!err) {  
        console.log("Db conexion correcta");  
    }  
    else{  
        console.log("Db conexion incorrecta \n Error :" + JSON.stringify(err,undefined,2));  
    }  
});  
  
// Para ejecutar el servidor con el puerto definido
app.listen(3001,()=> console.log("Express esta corriendo en el puerto : 3001"));  
  
 
//Get opbtener todas las monedas  
app.get('/crypto',(req,res)=>{  
    mysqlConnection.query('SELECT * FROM monedas',(err,rows,fields)=>{  
    if(!err)   
    res.send(rows);  
    else  
    console.log(err);  
})  
});  
//POST almacenar una moneda
app.post('/crypto',[
    body('nombre')
    .isAlpha()
    .withMessage('nombre debe ser solo de letras')
    .not()
    .isEmpty()
    .withMessage('nombre es un dato requerido'),
    body('usd')
    .not()
    .isEmpty()
    .withMessage('numero es un dato requerido')
    .isInt()
    .withMessage('El dato debe ser numero entero')
    .isLength({ min: 1 , max:9})
    .withMessage('El dato debe ser mayor a 1 digito')
],(req,res)=>{ 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    } 
    let moneda = req.body; 
    let nombre = moneda.nombre;
    let usd = Number(moneda.usd,10); 
    mysqlConnection.query('INSERT INTO monedas (nombre,usd) VALUES (?,?)',[nombre,usd],(err,rows,fields)=>{  
        if(!err)   
        res.send("Moneda almacenada");  
        else  
        console.log(err);
})  
}); 





