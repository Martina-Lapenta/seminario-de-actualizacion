Endpoint: "IAuthService/Login"
Método HTTP: POST
Formato Serializacion: JSON
Cabecera entrada: Content-Type: application/json
Cabecera salida: Content-Type: application/json
Estructura de datos IN:
{
  "user": "martina",
  "password": "12345"
}
Estructura de datos OUT:
{
  "token": "abc123xyz",
  "message": "Inicio de sesión exitoso."
}
Estructura de datos ERR:
{
  "type": "error",
  "description": "Usuario o contraseña incorrectos."
}


Endpoint: "IAuthService/Logout"
Método HTTP: POST
Formato Serializacion: JSON
Cabecera entrada: Authorization: Bearer <token>
Cabecera salida: -
Estructura de datos IN:
{
  "token": "abc123xyz"
}
Estructura de datos OUT:
{
  "success": true,
  "message": "Sesión cerrada correctamente."
}
Estructura de datos ERR:
{
  "type": "error",
  "description": "Token inválido o sesión no encontrada."
}


Endpoint: "IAuthService/ValidateToken"
Método HTTP: GET
Formato Serializacion: JSON
Cabecera entrada: Authorization: Bearer <token>
Cabecera salida: -
Estructura de datos IN:
{
  "token": "abc123xyz"
}
Estructura de datos OUT:
{
  "valid": true,
  "user": "martina"
}
Estructura de datos ERR:
{
  "type": "error",
  "description": "Token expirado o inválido."
}