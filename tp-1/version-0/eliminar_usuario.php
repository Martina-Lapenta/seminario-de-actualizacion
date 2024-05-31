<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "trabajo_db";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Obtener el ID del usuario del formulario
        $userId = $_POST['usuario_id'];

        // Llamar al procedimiento almacenado para eliminar el usuario
        $stmt = $conn->prepare("CALL DeleteUser(:userId)");
        $stmt->bindParam(':userId', $userId, PDO::PARAM_INT);
        $stmt->execute();

        echo "Usuario eliminado correctamente.";
    }
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}

$conn = null;
?>
