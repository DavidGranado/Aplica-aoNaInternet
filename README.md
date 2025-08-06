# A4-Aplicacao-na-Internt

Repositório do trabalho A4 da disciplina, voltado para a construção de um **painel administrativo de uma loja online** (gift cards, jogos e novidades), com área de login, gerenciamento de usuários, produtos e novidades (notícias).

## \:rocket: **Objetivo**

Desenvolver uma aplicação web em PHP e MySQL, utilizando Bootstrap, com um painel administrativo seguro, prático e responsivo para cadastro, consulta, edição e exclusão de usuários, produtos e novidades do site.

## \:computer: **Tecnologias utilizadas**

* **PHP 7+**
* **MySQL**
* **Bootstrap 5**
* **HTML5, CSS3, JavaScript**
* **XAMPP**

## \:key: **Funcionalidades**

* **Login seguro para administradores**
* **CRUD de usuários:** cadastrar, listar, editar e excluir usuários.
* **CRUD de produtos:** cadastro completo, categorias dinâmicas, preço com validação, desconto, estoque, etc.
* **CRUD de novidades:** cadastrar, listar, editar e excluir posts/notícias.
* **Controle de sessão:** logout manual e timeout automático de 2 minutos sem atividade.
* **Interface moderna e responsiva:** todos os módulos usam layouts padronizados, sem scrolls desnecessários.
* **Validação de campos:** feedbacks de erros, validação de preço no formato brasileiro (R\$ 2.390,00).
* **Segurança:** SQL com prepared statements.

## \:electric\_plug: **Como rodar localmente**

1. **Clone o repositório ou copie os arquivos para a pasta do seu XAMPP**
   Exemplo:

   ```
   cp -r ./A4-Aplicacao-na-Internt /caminho/do/xampp/htdocs/
   ```

2. **Inicie o XAMPP** e certifique-se que **Apache** e **MySQL** estão rodando.

3. **Crie o banco de dados e as tabelas:**

   * Acesse o `phpMyAdmin` (normalmente em [http://localhost/phpmyadmin](http://localhost/phpmyadmin))
   * Importe o arquivo:

     ```
     dataset/loja_gift_cards.sql
     ```

4. **Acesse o painel administrativo:**

   * [http://localhost/A4-Aplicacao-na-Internt/admin/login.php](http://localhost/A4-Aplicacao-na-Internt/admin/login.php)

5. **(Opcional) Visualize o frontend simulado:**

   * [http://localhost/A4-Aplicacao-na-Internt/frontend/home/home.html](http://localhost/A4-Aplicacao-na-Internt/frontend/home/home.html)

## \:pencil: **Exemplo de Login**

* **Usuário inicial:**

  * Email: *(preencha com o email cadastrado manualmente no banco ou pela tela de usuários)*
  * Senha: *(a senha correspondente ao usuário)*

## \:memo: **Observações**

* O sistema controla sessões do admin e expira automaticamente após 2 minutos de inatividade.
* Os valores dos produtos devem ser inseridos no formato brasileiro (ex: `2.390,00`), mas são salvos em centavos no banco para evitar problemas de arredondamento.
* O projeto segue uma separação clara entre frontend (site público) e backend (painel admin).

## \:star: **Créditos**

Desenvolvido como trabalho da disciplina A4 para a Faculdade (2025).
