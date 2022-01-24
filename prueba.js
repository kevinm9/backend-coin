


// Importing the packages required for the project.  
  
const mysql = require('mysql');  
const express = require('express');  
var app = express();  
const bodyparser = require('body-parser');  
  
// Used for sending the Json Data to Node API  
app.use(bodyparser.json());  
  
// Connection String to Database  
var mysqlConnection = mysql.createConnection({  
    host: 'localhost',  
    user : 'root',  
    password : '',   
    database : 'employeedb',  
    multipleStatements : true  
});  
  
// To check whether the connection is succeed for Failed while running the project in console.  
mysqlConnection.connect((err) => {  
    if(!err) {  
        console.log("Db Connection Succeed");  
    }  
    else{  
        console.log("Db connect Failed \n Error :" + JSON.stringify(err,undefined,2));  
    }  
});  
  
// To Run the server with Port Number  
app.listen(3000,()=> console.log("Express server is running at port no : 3000"));  
  
// CRUD Methods  
//Get all Employees  
app.get('/employees',(req,res)=>{  
    mysqlConnection.query('SELECT * FROM Employee',(err,rows,fields)=>{  
    if(!err)   
    res.send(rows);  
    else  
    console.log(err);  
})  
});  
  
//Get the Employee Data based on Id  
app.post('/employees',(req,res)=>{  
    let emp = req.body;  
    mysqlConnection.query('INSERT INTO Employee VALUES (?,?,?)',[emp.Id,emp.Name,emp.Lastname],(err,rows,fields)=>{  
        if(!err)   
        res.send("Insertion Complete");  
        else  
        console.log(err);
})  
}); 
  
 
  
  
 
  

 
  
  
 
  
