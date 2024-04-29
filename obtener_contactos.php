<?php
// Conexión a la base de datos
include_once("database.php");

try {
    // Consulta para obtener los contactos
    $query = "SELECT * FROM contacto";
    $stmt = $connection->prepare($query);
    $stmt->execute();
    $contacts = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Respuesta con los contactos obtenidos
    $response = array("success" => true, "contacts" => $contacts);
    echo json_encode($response);
} catch (PDOException $e) {
    // Respuesta de error
    $response = array("success" => false, "message" => "Error al obtener los contactos: " . $e->getMessage());
    echo json_encode($response);
}
?>
