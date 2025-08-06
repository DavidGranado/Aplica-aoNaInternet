<?php
include '../conexao.php';

date_default_timezone_set('America/Sao_Paulo');

$id = isset($_GET['id']) && is_numeric($_GET['id']) ? (int) $_GET['id'] : 0;

$sql = "SELECT * FROM novidades WHERE id = $id";
$res = $conn->query($sql);

$novidade = null;
if ($res && $res->num_rows > 0) {
    $novidade = $res->fetch_assoc();
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Detalhes da Novidade</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body class="container py-4">
  <h1>Detalhes da Novidade</h1>

  <?php if ($novidade): ?>
  <ul class="list-group">
    <li class="list-group-item"><strong>ID:</strong> <?= $novidade['id'] ?></li>
    <li class="list-group-item"><strong>Título:</strong> <?= htmlspecialchars($novidade['titulo']) ?></li>
    <li class="list-group-item"><strong>Conteúdo:</strong> <?= nl2br(htmlspecialchars($novidade['conteudo'])) ?></li>
    <li class="list-group-item"><strong>Data:</strong> <?= date('d/m/Y H:i', strtotime($novidade['data'])) ?></li>
  </ul>
  <?php else: ?>
    <div class="alert alert-warning">Novidade não encontrada.</div>
  <?php endif; ?>

  <a href="index.php" class="btn btn-secondary mt-3">Voltar</a>
</body>
</html>
