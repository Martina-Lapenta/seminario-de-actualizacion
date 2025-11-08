Endpoint: /IUserService/GetAllUsers
Método HTTP: GET
Formato Serializacion: JSON
Cabecera entrada: -
Cabecera salida: -
Estructura de datos IN: -
Estructura de datos OUT:
[
     {
         "id":2,
         "name": "example",
         "email": "example@example.com"
     }  
]

Estructura de datos ERR:
{
    "type": "error"
    "description": "Example error.."
}



Endpoint: "IUserService/GetUserById"
Método HTTP: GET
Formato Serializacion: JSON
Cabecera entrada: -
Cabecera salida: -
Estructura de datos IN:
{
    "id" : 7
}
Estructura de datos OUT:
{
     "id":-1,
     "name": "none",
     "email": "none@example.com"
}
Estructura de datos ERR:
{
    "type": "error"
    "description": "User not found"
}



Endpoint: "IUserService/CreateUser"
Método HTTP: POST
Formato Serializacion: JSON
Cabecera entrada: Content-Type: application/json
Cabecera salida: Content-Type: application/json
Estructura de datos IN:
{
     "name": "Nuevo usuario",
     "email": "nuevo@example.com"
}
Estructura de datos OUT:
{
     "id":4,
     "name": "Nuevo usuario",
     "email": "nuevo@example.com"
}
Estructura de datos ERR:
{
    "type": "error"
    "description": "No se pudo crear el usuario"
}


Endpoint: "IUserService/UpdateUser"
Método HTTP: PUT
Formato Serializacion: JSON
Cabecera entrada: Content-Type: application/json
Cabecera salida: Content-Type: application/json
Estructura de datos IN:
{
    "id":4,
     "name": "Usuario actualizado ",
     "email": "actualizado@mail.com"
}
Estructura de datos OUT:
{
    "success": true,
    "message": "Usuario actualizado correctamente."
}
Estructura de datos ERR:
{
    "type": "error"
    "description": "No se pudo actualizar el usuario"
}




Endpoint: "IUserService/DeleteUser"
Método HTTP: DELETE
Formato Serializacion: JSON
Cabecera entrada: -
Cabecera salida: -
Estructura de datos IN:
{
    "id":4,
}
Estructura de datos OUT:
{
    "success": true,
    "message": "Usuario ELIMINADO correctamente."
}
Estructura de datos ERR:
{
    "type": "error"
    "description": "No se pudo eliminar el usuario"
}