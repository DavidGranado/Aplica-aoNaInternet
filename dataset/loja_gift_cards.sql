-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 03/07/2025 às 00:23
-- Versão do servidor: 9.1.0
-- Versão do PHP: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `loja_gift_cards`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `posts`
--

DROP TABLE IF EXISTS `posts`;
CREATE TABLE IF NOT EXISTS `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `conteudo` text NOT NULL,
  `data` datetime NOT NULL,
  `imagem` varchar(256) DEFAULT NULL,
  `autor` varchar(256) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;

--
-- Despejando dados para a tabela `posts`
--

INSERT INTO `posts` (`id`, `titulo`, `conteudo`, `data`, `imagem`, `autor`) VALUES
(6, 'Elden Ring: DLC \"Shadow of the Erdtree\" é lançado com sucesso', 'O aguardado DLC de Elden Ring, \"Shadow of the Erdtree\", foi lançado nesta sexta-feira (21) e já é aclamado pela crítica. Com novas áreas, chefes desafiadores e uma expansão da lore, o conteúdo promete elevar ainda mais a experiência do jogo.', '2025-06-21 14:34:40', 'Elden-Ring-Shadow-Of-The-Erdtree.jpg', 'Lucas GameDev'),
(7, 'GTA VI ganha trailer oficial e janela de lançamento para 2026', 'A Rockstar Games divulgou nesta semana o primeiro trailer oficial de GTA VI, confirmando o lançamento para o outono de 2026. O jogo terá protagonistas duplos, um mapa inspirado em Miami e promete revolucionar a franquia.', '2025-06-23 14:30:00', 'GTA_VI.jpg', 'Isabelle GameDev\r\n'),
(8, 'Final Fantasy IX Remake é oficialmente anunciado pela Square Enix', 'A Square Enix confirmou o desenvolvimento do remake de Final Fantasy IX, clássico de 2000. A nova versão promete manter a essência do original com gráficos atualizados e sistema de batalha modernizado.', '2025-06-20 09:45:00', 'final-fantasy-IX.png', 'Mariana GameDev'),
(9, 'Hades II entra em Acesso Antecipado com novos deuses e armas', 'Hades II já está disponível em Acesso Antecipado na Steam e Epic Games Store. A sequência traz a protagonista Melinoë, novas armas e deuses gregos inéditos, mantendo o combate frenético que consagrou o primeiro jogo.', '2025-06-19 12:00:00', 'hades_ii.jpg', 'Mariana GameDev'),
(10, 'Nintendo anuncia novo console \"Switch 2\" com retrocompatibilidade', 'A Nintendo revelou oficialmente o Switch 2, com lançamento previsto para março de 2026. O novo console terá suporte a jogos do Switch original, desempenho gráfico aprimorado e nova tecnologia de tela.', '2025-06-24 08:15:00', 'nintendo-switch-2.jpg', 'Lucas GameDev'),
(11, 'Valorant Mobile entra em fase de testes fechados em diversos países', 'A Riot Games iniciou a fase de testes fechados do Valorant Mobile em regiões selecionadas. A versão portátil do FPS competitivo busca manter a jogabilidade estratégica da versão de PC, com controles otimizados para touch screen.', '2025-06-22 11:20:00', 'valorant_mobile.jpg', 'David GameDev');

-- --------------------------------------------------------

--
-- Estrutura para tabela `produtos`
--

DROP TABLE IF EXISTS `produtos`;
CREATE TABLE IF NOT EXISTS `produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(256) NOT NULL,
  `preco` int NOT NULL,
  `desconto` int NOT NULL DEFAULT '0',
  `descricao` text,
  `categoria` varchar(100) DEFAULT NULL,
  `estoque` tinyint(1) NOT NULL DEFAULT '1',
  `previsao` datetime DEFAULT NULL,
  `imagem` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb3;

--
-- Despejando dados para a tabela `produtos`
--

INSERT INTO `produtos` (`id`, `nome`, `preco`, `desconto`, `descricao`, `categoria`, `estoque`, `previsao`, `imagem`) VALUES
(1, 'Gift Card PlayStation R$100', 10000, 0, 'Cartão pré-pago para compras na PlayStation Store.', 'Gift Card', 1, NULL, 'playstation-store-100.png'),
(2, 'Gift Card Xbox R$100', 10000, 5, 'Créditos para Xbox Store, válido para jogos e assinaturas.', 'Gift Card', 1, NULL, 'xbox-100.jpg'),
(3, 'Gift Card Steam R$50', 5000, 0, 'Adicione saldo à sua carteira Steam para comprar jogos.', 'Gift Card', 1, NULL, 'steam-50.jpg'),
(4, 'Gift Card Google Play R$30', 3000, 10, 'Cartão digital para compras na Google Play Store.', 'Gift Card', 1, NULL, 'google-play-30.jpg'),
(5, 'Gift Card Nintendo eShop R$200', 20000, 0, 'Créditos para usar na eShop da Nintendo.', 'Gift Card', 1, NULL, 'nintendo-eshop.png'),
(6, 'Gift Card Steam R$100', 10000, 0, 'Cartão presente digital para compras na Steam.', 'Gift Card', 1, NULL, 'steam-100.jpg'),
(7, 'Gift Card Apple Store R$50', 5000, 5, 'Saldo para usar em apps, jogos e música na Apple Store.', 'Gift Card', 1, NULL, 'app-store-50.png'),
(8, 'Gift Card Free Fire R$50', 5000, 0, 'Créditos para comprar diamantes no Free Fire.', 'Gift Card', 1, NULL, 'free-fire-50.jpg'),
(9, 'Gift Card Roblox R$100', 10000, 0, 'Utilize para obter Robux e conteúdo premium no Roblox.', 'Gift Card', 1, NULL, 'roblox-100.jpg'),
(10, 'Gift Card League of Legends R$50', 5000, 0, 'Créditos para adquirir RP no League of Legends.', 'Gift Card', 1, NULL, 'league-50.png'),
(11, 'The Witcher 3: Wild Hunt', 12990, 20, 'RPG de mundo aberto com narrativa envolvente.', 'Jogos', 1, '2025-07-01 00:00:00', 'witcher-3-wild-hunt.jpg'),
(12, 'Minecraft', 9990, 0, 'Jogo de construção em mundo aberto com blocos.', 'Jogos', 1, NULL, 'minecraft.jpg'),
(13, 'God of War: Ragnarok', 29990, 10, 'Aventura épica mitológica com Kratos.', 'Jogos', 1, '2025-06-30 00:00:00', 'god-of-war-ragnarok.jpg'),
(14, 'Elden Ring', 25990, 15, 'RPG de ação em mundo aberto com combates desafiadores.', 'Jogos', 1, NULL, 'elden-ring.jpg'),
(15, 'Hades', 8990, 5, 'Roguelike com combate rápido e mitologia grega.', 'Jogos', 1, NULL, 'hades.jpeg'),
(16, 'FIFA 25', 34990, 0, 'Simulador de futebol com times e jogadores atualizados.', 'Jogos', 1, '2025-07-10 00:00:00', 'fifa-25.png'),
(17, 'Hollow Knight', 5990, 10, 'Jogo de plataforma e exploração em estilo metroidvania.', 'Jogos', 1, NULL, 'hollow-knight.jpg'),
(18, 'Resident Evil 4 Remake', 23990, 20, 'Terror e ação com gráficos atualizados.', 'Jogos', 1, '2025-07-05 00:00:00', 'resident-evil-4-remake.jpg'),
(19, 'Stardew Valley', 4990, 0, 'Simulador de fazenda com elementos de RPG.', 'Jogos', 1, NULL, 'stardew-valley.jpg'),
(20, 'Cyberpunk 2077', 19990, 25, 'Jogo futurista de RPG em um mundo distópico.', 'Jogos', 1, NULL, 'cyberpunk-2077.jpg');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `criado_em` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ativo` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `email`, `senha`, `criado_em`, `ativo`) VALUES
(1, 'Ana Souza', 'ana.souza@email.com', 'ana123', '2025-05-23 20:25:30', 1),
(2, 'Carlos Lima', 'carlos.lima@email.com', 'carlos456', '2025-05-23 20:25:30', 1),
(3, 'Raisa Silva', 'marina.silva@email.com', 'raisa789', '2025-05-23 20:25:30', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
