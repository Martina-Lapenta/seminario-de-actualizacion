<?php
$servername = "localhost"; // Cambia esto si tu servidor no es localhost
$username = "root"; // Cambia esto por tu nombre de usuario de MySQL
$password = ""; // Cambia esto por tu contraseña de MySQL
$dbname = "trabajo_db"; // Cambia esto por el nombre de tu base de datos

try {
    // Crear conexión
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // Establecer el modo de error de PDO a excepción
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Preparar la llamada al procedimiento almacenado
    $stmt = $conn->prepare("CALL InsertUserWithGroupAndAction(:userName, :groupName, :actionName)");
    
    // Asignar los parámetros de forma segura
    $userName = "Juan Pérez"; // Aquí va el nombre del usuario que quieres insertar
    $groupName = "Admin"; // Aquí va el nombre del grupo que quieres insertar
    $actionName = "Create"; // Aquí va el nombre de la acción que quieres insertar
    $stmt->bindParam(':userName', $userName, PDO::PARAM_STR);
    $stmt->bindParam(':groupName', $groupName, PDO::PARAM_STR);
    $stmt->bindParam(':actionName', $actionName, PDO::PARAM_STR);
    
    // Ejecutar la declaración preparada
    $stmt->execute();

    echo "Nuevo usuario, grupo y acción insertados correctamente.";
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}

// Cerrar la conexión
$conn = null;
?>
