<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "trabajo_db";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $conn->prepare("SELECT u.id, u.name, gt.name as 'group', a.name as 'action' 
                            FROM user u
                            LEFT JOIN group_user gu ON u.id = gu.id_user
                            LEFT JOIN group_type gt ON gu.id_group = gt.id
                            LEFT JOIN group_action ga ON gt.id = ga.id_group
                            LEFT JOIN action a ON ga.id_action = a.id");
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($result);
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}

$conn = null;
?>
