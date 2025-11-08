Endpoint: IFileStorage/ListFiles
Método HTTP: GET
Formato Serializacion: JSON
Cabecera entrada: -
Cabecera salida: -
Estructura de datos IN: 
{
  "directory": "/documentos/"
}

Estructura de datos OUT:
{
  "files": ["informe.txt", "resumen.pdf", "foto.jpg"]
}


Estructura de datos ERR:
{
  "type": "error",
  "description": "No se pudo listar los archivos del directorio."
}




Endpoint: "IFileStorage/ReadFile"
Método HTTP: GET
Formato Serializacion: JSON
Cabecera entrada: -
Cabecera salida: Content-Type: text/plain
Estructura de datos IN:
{
  "path": "/documentos/informe.txt"
}
Estructura de datos OUT:
{
  "content": "Texto del archivo leído correctamente."
}
Estructura de datos ERR:
{
  "type": "error",
  "description": "Archivo no encontrado o sin permiso de lectura."
}




Endpoint: "IFileStorage/WriteFile"
Método HTTP: POST
Formato Serializacion: JSON
Cabecera entrada: Content-Type: application/json
Cabecera salida:-
Estructura de datos IN:
{
  "path": "/documentos/nuevo.txt",
  "content": "Nuevo contenido del archivo."
}
Estructura de datos OUT:
{
  "success": true,
  "message": "Archivo creado o sobrescrito correctamente."
}
Estructura de datos ERR:
{
  "type": "error",
  "description": "No se pudo escribir el archivo."
}

Endpoint: "IFileStorage/DeleteFile"
Método HTTP: DELETE
Formato Serializacion: JSON
Cabecera entrada: -
Cabecera salida: -
Estructura de datos IN:
{
  "path": "/documentos/archivo.txt"
}
Estructura de datos OUT:
{
  "success": true,
  "message": "Archivo eliminado correctamente."
}
Estructura de datos ERR:
{
  "type": "error",
  "description": "No se pudo eliminar el archivo."
}



