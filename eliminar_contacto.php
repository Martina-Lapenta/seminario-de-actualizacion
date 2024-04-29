<?php
// Conexión a la base de datos
include_once("database.php");

// Obtener el ID del contacto a eliminar desde la solicitud POST
$json_body = file_get_contents('php://input');
$object = json_decode($json_body);
$idContacto = $object->id;

try {
    // Consulta para eliminar el contacto
    $query = "DELETE FROM contacto WHERE id = :idContacto";
    $stmt = $connection->prepare($query);
    $stmt->bindParam(':idContacto', $idContacto);
    $stmt->execute();

    // Respuesta de éxito
    $response = array("success" => true);
    echo json_encode($response);
} catch (PDOException $e) {
    // error
    $response = array("success" => false, "message" => "Error al eliminar el contacto: " . $e->getMessage());
    echo json_encode($response);
}
?>
