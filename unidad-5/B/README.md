Endpoint: /IProductCatalog/SearchProducts
Método HTTP: GET
Formato Serializacion: JSON
Cabecera entrada: -
Cabecera salida: -
Estructura de datos IN: -
Estructura de datos OUT:
[
     {
         "id":2,
         "name": "product",
         "price": 100
     }  
]

Estructura de datos ERR:
{
    "type": "error"
    "description": "Example error.."
}



Endpoint: "IUserService/GetProductById"
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
     "name": "Product",
     "price": 100
}
Estructura de datos ERR:
{
    "type": "error"
    "description": "Producto no encontrado"
}



Endpoint: "IUserService/UpdateStock"
Método HTTP: PUT
Formato Serializacion: JSON
Cabecera entrada: Content-Type: application/json
Cabecera salida: Content-Type: application/json
Estructura de datos IN:
{
    "productId": 5,
    "newStock": 30
}
Estructura de datos OUT:
{
    "success": true,
    "message": "Stock actualizado correctamente."
}
Estructura de datos ERR:
{
    "type": "error"
    "description": "No se pudo ACTUALIZAR el STOCK del producto "
}

