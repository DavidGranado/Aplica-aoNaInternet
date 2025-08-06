<?php
include '../conexao.php';

$id = $_GET['id'] ?? 0;
    
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Atualiza os dados do produto
        $nome = $_POST['nome'];
        $descricao = $_POST['descricao'];
        $preco = $_POST['preco'];

        $update_sql = "UPDATE produtos SET nome = ?, descricao = ?, preco = ? WHERE id = ?";
        $stmt = $conn->prepare($update_sql);
        $stmt->bind_param("ssdi", $nome, $descricao, $preco, $id);
        $stmt->execute();
        
        header("Location: index.php");  // Redireciona após a atualização
  }
    
$sql = "SELECT * FROM produtos WHERE id = $id";
$result = $conn->query($sql);
$produto = $result->fetch_assoc();
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Editar Usuário</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container py-4">
    <h1 class="mb-4">Editar Produto</h1>
  <form method="POST">
    <div class="mb-3">
      <label class="form-label">Nome</label>
      <input type="text" name="nome" class="form-control" value="<?= $produto['nome'] ?> "required>
    </div>
    <div class="mb-3">
      <label class="form-label">Descrição</label>
      <input type="text" name="descricao" class="form-control" value="<?= $produto['descricao'] ?>" required>
    </div>
    <div class="mb-3">
      <label class="form-label">Preço</label>
      <input type="text" name="preco" class="form-control" value="<?= $produto['preco'] ?>" required>
    </div>
    <button type="submit" class="btn btn-primary">Atualizar</button>
    <a href="index.php" class="btn btn-secondary">Cancelar</a>
  </form>
</body>
