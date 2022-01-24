## Available Scripts

1.- instalar depencias

npm install

2.- ejecutar app

node index.js 

--- informacion por consola ---
```bash

Express esta corriendo en el puerto : 3001

Db conexion correcta
```

endpoint - api rest del backend // GET//POST

http://localhost:3001/crypto

json:

```json
{
    "nombre": "troicoin",
    "usd": "1455500"
}
```

respuesta del backend 

```html
Moneda almacenada
```

json de errores validando request del body:

```json
{
    "errors": [
        {
            "value": "",
            "msg": "numero es un dato requerido",
            "param": "usd",
            "location": "body"
        },
        {
            "value": "",
            "msg": "El dato debe ser numero entero",
            "param": "usd",
            "location": "body"
        },
        {
            "value": "",
            "msg": "El dato debe ser mayor a 1 digito",
            "param": "usd",
            "location": "body"
        }
    ]
}
```

Link de la aplicacion en react [ React App](https://github.com/kevinm9/react-coin).
