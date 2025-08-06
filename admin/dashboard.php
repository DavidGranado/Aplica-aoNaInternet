<?php
session_start();
if (!isset($_SESSION['admin'])) {
    header("Location: login.php");
    exit;
}

$usuario = $_SESSION['admin'];
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Portal do Administrador</title>
  <style>
    body {
      font-family: sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }

    .welcome {
      text-align: center;
      margin-top: 80px;
      font-size: 20px;
    }
  </style>
</head>
<body>

  <?php include 'includes/menuADM.php'; ?>

  <div class="welcome">
    <p>Bem-vindo, <?php echo htmlspecialchars($usuario); ?>!</p>
    <p>O que você deseja gerenciar?</p>
  </div>

</body>
</html>
