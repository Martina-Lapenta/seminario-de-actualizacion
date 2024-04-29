
<?php
include_once("./database.php");

$json_body = file_get_contents('php://input');
$object = json_decode($json_body);

$phone = $object->phone;
$lastname = $object->lastname;
$name = $object->name;

try {
    $connection = new PDO('mysql:host=127.0.0.1:3306;dbname=agenda_db', 'root', '');
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $json_body = file_get_contents('php://input');
    $object = json_decode($json_body);

    $phone = $object->phone;
    $lastname = $object->lastname;
    $name = $object->name;

    // Preparar la consulta SQL con placeholders para evitar SQL Injection
    $sql = "INSERT INTO contacto (name, lastname, phone) VALUES (:name, :lastname, :phone)";
    $stmt = $connection->prepare($sql);

    // Asignar valores a los placeholders y ejecutar la consulta
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':lastname', $lastname);
    $stmt->bindParam(':phone', $phone);

    $stmt->execute();

    $response = array("status" => "ok", "description" => "Usuario creado satisfactoriamente.");
    echo json_encode($response);
} catch (PDOException $e) {
    $response = array("status" => "error", "description" => "Error al crear el usuario: " . $e->getMessage());
    echo json_encode($response);
}

$connection = null; // Cerrar la conexión al finalizar

?>


