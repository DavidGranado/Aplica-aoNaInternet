<?php
session_start();
include 'conexao.php';  

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST['usuario'];
    $senha = $_POST['senha'];

    // Verifica se o usuário existe no banco de dados
    $stmt = $conn->prepare("SELECT * FROM admin WHERE usuario = ?");
    $stmt->bind_param("s", $usuario);
    $stmt->execute();
    $resultado = $stmt->get_result();
    $dados = $resultado->fetch_assoc();

    // Se o usuário foi encontrado e a senha for válida
    if ($dados && password_verify($senha, $dados['senha'])) {
        // Inicia a sessão e redireciona para a página do painel
        $_SESSION['admin'] = $dados['usuario'];
        $_SESSION['ultimo_acesso'] = time();
        header("Location: dashboard.php");
        exit;
    } else {
        $erro = "Usuário ou senha inválidos!";
    }
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Brew Lab - Login</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
      background-color: rgb(255, 255, 255);
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;  /* Alinha o conteúdo no centro horizontal */
    }

    /* Logo no canto esquerdo */
    .logo {
      position: absolute;
      left: 20px;
      width: 200px; /* Ajuste o tamanho da logo conforme necessário */
    }

    /* Título "Portal do Administrador" no topo da página */
    h1 {
      font-size: 36px;
      margin-top: 40px;
      margin-bottom: 40px; /* Ajusta o espaço entre o título e o formulário */
      color: #222;
    }

    .form-container {
      display: flex;
      justify-content: center;  /* Centraliza o formulário horizontalmente */
      align-items: center;  /* Centraliza o formulário verticalmente */
      flex-grow: 1; /* Preenche o espaço restante */
      width: 100%;
    }

    .container {
      text-align: center;
      width: 100%;
      max-width: 400px;  /* Tamanho máximo do formulário */
    }

    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .form-title {
      font-size: 28px;
      color: #2c2c2c;
      margin-bottom: 20px;
    }

    .form-group {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
    }

    .form-group label {
      width: 80px;
      text-align: right;
      margin-right: 10px;
      font-size: 18px;
      color: #222;
    }

    .form-group input {
      width: 250px;
      padding: 10px;
      border: none;
      border-radius: 20px;
      background-color: rgb(241, 189, 17);
      font-size: 16px;
    }

    button {
      margin-top: 20px;
      padding: 10px 40px;
      font-size: 18px;
      font-weight: bold;
      background-color: #fcbf1e;
      border: 3px solid #2c2c2c;
      border-radius: 30px;
      color: #2c2c2c;
      cursor: pointer;
    }

    button:hover {
      background-color: #2c2c2c;
      color: rgba(253, 253, 253, 0.9);
    }

    .error {
      color: red;
      font-size: 14px;
      margin-top: 15px;
    }
  </style>
</head>
<body>
  <!-- Logo no canto esquerdo -->
  <img src="img/Logo-Empresa.png" alt="Logo Brew Lab" class="logo">

  <!-- Título "Portal do Administrador" no topo da página -->
  <h1>PORTAL DO ADMINISTRADOR</h1>

  <!-- Container que centraliza o formulário de login -->
  <div class="form-container">
    <div class="container">
      <h2 class="form-title">LOGIN</h2>
      <form method="POST" class="form">
        <div class="form-group">
          <label for="usuario">Usuário:</label>
          <input type="text" id="usuario" name="usuario" required>
        </div>

        <div class="form-group">
          <label for="senha">Senha:</label>
          <input type="password" id="senha" name="senha" required>
        </div>

        <button type="submit">LOGIN</button>
      </form>

      <!-- Exibe o erro, se houver -->
      <?php if (isset($erro)) echo "<p class='error'>$erro</p>"; ?>
    </div>
  </div>
</body>
</html>
