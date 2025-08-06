<?php
include '../conexao.php';

$id = isset($_GET['id']) && is_numeric($_GET['id']) ? (int) $_GET['id'] : 0;

$sql = "SELECT * FROM usuarios WHERE id = $id";
$res = $conn->query($sql);

$usuario = null;
if ($res && $res->num_rows > 0) {
    $usuario = $res->fetch_assoc();
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Detalhes do Usuário</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body class="container py-4">
  <h1>Detalhes do Usuário</h1>

  <?php if ($usuario): ?>
  <ul class="list-group">
    <li class="list-group-item"><strong>ID:</strong> <?= $usuario['id'] ?></li>
    <li class="list-group-item"><strong>Nome:</strong> <?= htmlspecialchars($usuario['nome']) ?></li>
    <li class="list-group-item"><strong>Endereço:</strong> <?= htmlspecialchars($usuario['endereco']) ?></li>
    <li class="list-group-item"><strong>Telefone:</strong> <?= htmlspecialchars($usuario['telefone']) ?></li>
    <li class="list-group-item"><strong>Email:</strong> <?= htmlspecialchars($usuario['email']) ?></li>
    <li class="list-group-item"><strong>Sexo:</strong> <?= htmlspecialchars($usuario['sexo']) ?></li>
  </ul>
  <?php else: ?>
    <div class="alert alert-warning">Usuário não encontrado.</div>
  <?php endif; ?>

  <a href="index.php" class="btn btn-secondary mt-3">Voltar</a>
</body>
</html>
