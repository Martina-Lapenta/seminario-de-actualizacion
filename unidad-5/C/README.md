Endpoint: /IUserService/TrackEvent
Método HTTP: Post
Formato Serializacion: JSON
Cabecera entrada: Content-Type: application/json
Cabecera salida: Content-Type: application/json
Estructura de datos IN: 
{
  "eventName": "CompraRealizada",
  "properties": {
    "usuario": "Martina",
    "producto": "Notebook",
    "monto": "500000"
  }
}
Estructura de datos OUT:
{
  "success": true,
  "message": "Evento registrado correctamente."
}

Estructura de datos ERR:
{
  "type": "error",
  "description": "No se pudo registrar el evento."
}


Endpoint: /IAnalyticsService/GetEventCount
Método HTTP: GET
Formato Serializacion: JSON
Cabecera entrada: -
Cabecera salida: -
Estructura de datos IN:
{
  "eventName": "CompraRealizada"
}

Estructura de datos OUT:
{
  "eventName": "CompraRealizada",
  "count": 42
}

Estructura de datos ERR:
{
  "type": "error",
  "description": "No se encontró el evento solicitado."
}




Endpoint: "/IAnalyticsService/GetTopEvents"
Método HTTP: GET
Formato Serializacion: JSON
Cabecera entrada: -
Cabecera salida: -
Estructura de datos IN:
{
  "limit": 3
}

Estructura de datos OUT:
{
  "topEvents": [
    { "eventName": "Login", "count": 120 },
    { "eventName": "CompraRealizada", "count": 85 },
    { "eventName": "Registro", "count": 60 }
  ]
}

Estructura de datos ERR:
{
  "type": "error",
  "description": "No hay eventos disponibles."
}

