
<style>
  .header {
    background-color: #000000;
    color: white;
    padding: 5px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }

  .header .logo-title {
    display: flex;
    align-items: center;
  }

  .header img {
    width: 80px;
  }

  .header h1 {
    margin-left: 10px;
    font-size: 24px;
  }

  .nav-links {
    display: flex;
    justify-content: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .header a {
    color: white;
    margin-left: 15px;
    text-decoration: none;
    font-size: 16px;
  }

  .header a:hover {
    color: #fcbf1e;
  }

  .logout {
    position: absolute;
    right: 50px;
  }

  .welcome {
    text-align: center;
    margin-top: 30px;
    font-size: 20px;
  }
</style>

<div class="header">
  <div class="logo-title">
    <a href="portal.php">
      <img src="/ADMIN/img/Logo-Empresa.png" alt="Logo Brew Lab">

    </a>
    <h1>PORTAL DO ADMINISTRADOR</h1>
  </div>

  <div class="nav-links">
    <a href="usuarios/index.php">Usuários</a>
    <a href="produtos/index.php">Produtos</a>
    <a href="novidades/index.php">Novidades</a>
  </div>

  <div class="logout">
    <a href="logout.php" class="btn btn-sm btn-outline-light">Logout</a>
  </div>
</div>
<br><br><br>
