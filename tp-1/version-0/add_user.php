<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "trabajo_db";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $userName = $_POST['userName'];
        $groupName = $_POST['groupName'];
        $actionName = $_POST['actionName'];

        $stmt = $conn->prepare("CALL InsertUserWithGroupAndAction(:userName, :groupName, :actionName)");
        $stmt->bindParam(':userName', $userName, PDO::PARAM_STR);
        $stmt->bindParam(':groupName', $groupName, PDO::PARAM_STR);
        $stmt->bindParam(':actionName', $actionName, PDO::PARAM_STR);
        $stmt->execute();

        echo "Nuevo usuario, grupo y acción insertados correctamente.";
    }
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}

$conn = null;
?>
