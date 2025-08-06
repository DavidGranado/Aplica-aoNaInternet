<?php
$host = "localhost";
$user = "root";
$senha = "123";
$banco = "empresa";

$conn = new mysqli($host, $user, $senha, $banco);
if ($conn->connect_error) {
    die("Erro: " . $conn->connect_error);
}
?>
