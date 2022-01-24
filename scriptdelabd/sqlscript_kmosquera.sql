/*
version: 1.0
autor: kevin mosquera 
Descripcion: creacion de base de datos y  tabla de monedas
id autoincrementable y unico
*/

CREATE DATABASE moneda_kmosquera;

USE moneda_kmosquera;

CREATE TABLE monedas (
  id INT(11) UNIQUE AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  usd INT(10) NOT NULL,
  PRIMARY KEY (Id)
);

INSERT INTO monedas ( id,nombre, usd) 
  VALUES (1,'Bitcoin', 200);


/* DROP table monedas */


