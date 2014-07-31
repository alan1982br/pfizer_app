-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Máquina: localhost
-- Data de Criação: 20-Jul-2014 às 04:13
-- Versão do servidor: 5.6.12-log
-- versão do PHP: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de Dados: `pfizer_alfa_taliglicerase`
--
CREATE DATABASE IF NOT EXISTS `pfizer_alfa_taliglicerase` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `pfizer_alfa_taliglicerase`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_documentos`
--

CREATE TABLE IF NOT EXISTS `tb_documentos` (
  `documentosId` int(11) NOT NULL AUTO_INCREMENT,
  `documentosTitulo` varchar(150) DEFAULT NULL,
  `documentosPath` varchar(50) DEFAULT NULL,
  `documentosTipo` varchar(10) NOT NULL,
  `documentosStatus` int(11) DEFAULT NULL,
  PRIMARY KEY (`documentosId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Extraindo dados da tabela `tb_documentos`
--

INSERT INTO `tb_documentos` (`documentosId`, `documentosTitulo`, `documentosPath`, `documentosTipo`, `documentosStatus`) VALUES
(1, 'Duns Number', 'duns_number.pdf', 'pdf', 1),
(2, 'My doc', 'my_doc.doc', 'doc', 1),
(3, 'Duns Number', 'duns_number.xls', 'xls', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_estudos`
--

CREATE TABLE IF NOT EXISTS `tb_estudos` (
  `estudosId` int(11) NOT NULL AUTO_INCREMENT,
  `estudosTipoId` int(11) NOT NULL,
  `estudosAutor` text NOT NULL,
  `estudosTitulo` text NOT NULL,
  `estudosDescricao` text NOT NULL,
  `estudosData` datetime NOT NULL,
  `estudosStatus` int(11) NOT NULL,
  PRIMARY KEY (`estudosId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=50 ;

--
-- Extraindo dados da tabela `tb_estudos`
--

INSERT INTO `tb_estudos` (`estudosId`, `estudosTipoId`, `estudosAutor`, `estudosTitulo`, `estudosDescricao`, `estudosData`, `estudosStatus`) VALUES
(26, 1, 'As muitas faces da Enfermagem', 'As muitas faces da Enfermagem', 'As muitas faces da Enfermagem', '0000-00-00 00:00:00', 0),
(46, 1, 'Doen&ccedil;a  de Gaucher: aspectos gerais e seu tratamento', 'Doen&ccedil;a  de Gaucher: aspectos gerais e seu tratamento', 'Doen&ccedil;a  de Gaucher: aspectos gerais e seu tratamento', '0000-00-00 00:00:00', 0),
(47, 1, 'Alfataliglicerase:   desde a produ&ccedil;&atilde;o at&eacute; a administra&ccedil;&atilde;o&nbsp;', 'Alfataliglicerase:   desde a produ&ccedil;&atilde;o at&eacute; a administra&ccedil;&atilde;o&nbsp;', 'Alfataliglicerase:   desde a produ&ccedil;&atilde;o at&eacute; a administra&ccedil;&atilde;o&nbsp;', '0000-00-00 00:00:00', 0),
(48, 1, 'Enfermagem e Doen&ccedil;a de Gaucher no Brasil: uma experi&ecirc;ncia da vida real', 'Enfermagem e Doen&ccedil;a de Gaucher no Brasil: uma experi&ecirc;ncia da vida real', 'Enfermagem e Doen&ccedil;a de Gaucher no Brasil: uma experi&ecirc;ncia da vida real', '0000-00-00 00:00:00', 0),
(49, 1, 'Compreendendo a farmacovigil&acirc;ncia', 'Compreendendo a farmacovigil&acirc;ncia', 'Compreendendo a farmacovigil&acirc;ncia', '0000-00-00 00:00:00', 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_estudos_tipo`
--

CREATE TABLE IF NOT EXISTS `tb_estudos_tipo` (
  `estudos_tipoId` int(11) NOT NULL AUTO_INCREMENT,
  `estudos_tipoNome` varchar(255) NOT NULL,
  `estudos_tipoData` datetime NOT NULL,
  `estudos_tipoStatus` int(11) NOT NULL,
  PRIMARY KEY (`estudos_tipoId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Extraindo dados da tabela `tb_estudos_tipo`
--

INSERT INTO `tb_estudos_tipo` (`estudos_tipoId`, `estudos_tipoNome`, `estudos_tipoData`, `estudos_tipoStatus`) VALUES
(1, 'Estudos', '0000-00-00 00:00:00', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_info`
--

CREATE TABLE IF NOT EXISTS `tb_info` (
  `infoId` int(11) NOT NULL AUTO_INCREMENT,
  `infoTitulo` varchar(150) DEFAULT NULL,
  `infoPath` varchar(50) DEFAULT NULL,
  `infoStatus` int(11) DEFAULT NULL,
  PRIMARY KEY (`infoId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_ip`
--

CREATE TABLE IF NOT EXISTS `tb_ip` (
  `ipServer` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `tb_ip`
--

INSERT INTO `tb_ip` (`ipServer`) VALUES
('192.168.0.149:8888');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_links_modulos`
--

CREATE TABLE IF NOT EXISTS `tb_links_modulos` (
  `links_modulosId` int(11) NOT NULL AUTO_INCREMENT,
  `links_modulosModulosId` int(11) NOT NULL,
  `links_modulosNome` varchar(80) NOT NULL,
  `links_modulosModulo` varchar(40) NOT NULL,
  `links_modulosAction` varchar(40) NOT NULL,
  `links_modulosUrl` varchar(200) NOT NULL,
  `links_modulosData` datetime NOT NULL,
  `links_modulosStatus` int(11) NOT NULL,
  PRIMARY KEY (`links_modulosId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=93 ;

--
-- Extraindo dados da tabela `tb_links_modulos`
--

INSERT INTO `tb_links_modulos` (`links_modulosId`, `links_modulosModulosId`, `links_modulosNome`, `links_modulosModulo`, `links_modulosAction`, `links_modulosUrl`, `links_modulosData`, `links_modulosStatus`) VALUES
(1, 1, 'Criar novo Usu&aacute;rios', 'usuarios', 'new', 'opcao=usuarios&acao=new', '0000-00-00 00:00:00', 1),
(2, 1, 'Consultar Usu&aacute;rios', 'usuarios', 'view', 'opcao=usuarios&acao=view', '0000-00-00 00:00:00', 1),
(3, 2, 'Criar novo modulo', 'modulos', 'new', 'opcao=modulos&acao=new', '0000-00-00 00:00:00', 1),
(4, 2, 'Consultar modulos', 'modulos', 'view', 'opcao=modulos&acao=view', '0000-00-00 00:00:00', 1),
(61, 72, 'Criar novo perfil', 'perfil', 'new', '', '2012-11-30 00:06:00', 0),
(62, 72, 'Visualizar perfis', 'perfil', 'view', '', '2012-11-30 00:06:00', 0),
(67, 75, 'Criar nova mensagem', 'mensagem', 'new', '', '2012-11-30 00:34:42', 0),
(68, 75, 'Visualizar mensagens', 'mensagem', 'view', '', '2012-11-30 00:34:42', 0),
(71, 77, 'Administrar listas', 'listadee-mails', 'new', '', '2012-12-03 18:01:32', 0),
(72, 77, 'Visualizar E-mails', 'listadee-mails', 'view', '', '2012-12-03 18:01:32', 0),
(73, 77, 'Cadastrar Grupos de E-mails', 'listadee-mails', 'newgroup', '', '2012-12-03 18:01:32', 0),
(74, 77, 'Visualizar Grupo de E-mails', 'listadee-mails', 'viewgroup', '', '2012-12-03 18:01:32', 0),
(75, 77, 'Importar Contatos', 'listadee-mails', 'import', '', '2012-12-03 18:01:32', 0),
(88, 84, 'Abrir nova lista', 'vip4all', 'new', '', '2013-02-17 21:44:04', 0),
(89, 84, 'Visualizar lista(s)', 'vip4all', 'view', '', '2013-02-17 21:44:04', 0),
(90, 85, 'Cadastrar nova empresa', 'empresas', 'new', '', '2013-02-17 22:54:00', 0),
(91, 84, 'Cadastrar E-mails', 'vip4all', 'newemail', '', '0000-00-00 00:00:00', 1),
(92, 84, 'Importar E-mails', 'vip4all', 'importemail', '', '0000-00-00 00:00:00', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_modulos`
--

CREATE TABLE IF NOT EXISTS `tb_modulos` (
  `modulosId` int(11) NOT NULL AUTO_INCREMENT,
  `modulosNome` varchar(100) NOT NULL,
  `modulosData` datetime NOT NULL,
  `modulosStatus` int(11) NOT NULL,
  PRIMARY KEY (`modulosId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=86 ;

--
-- Extraindo dados da tabela `tb_modulos`
--

INSERT INTO `tb_modulos` (`modulosId`, `modulosNome`, `modulosData`, `modulosStatus`) VALUES
(1, 'Usu&aacute;rios', '0000-00-00 00:00:00', 1),
(2, 'Modulos', '0000-00-00 00:00:00', 1),
(72, 'Perfil', '2012-11-30 00:06:00', 1),
(75, 'Mensagem', '2012-11-30 00:34:42', 1),
(77, 'Lista de Contatos', '2012-12-03 18:01:32', 1),
(84, 'Vip 4 All', '2013-02-17 21:44:04', 1),
(85, 'Empresas', '2013-02-17 22:54:00', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_mynote`
--

CREATE TABLE IF NOT EXISTS `tb_mynote` (
  `mynoteId` int(11) NOT NULL AUTO_INCREMENT,
  `mynoteUserId` int(11) NOT NULL,
  `mynotePalestraDadoId` int(11) NOT NULL,
  `mynotePalestraDadoTitulo` varchar(255) NOT NULL,
  `mynoteNote` text NOT NULL,
  `mynoteStatus` int(11) NOT NULL,
  PRIMARY KEY (`mynoteId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Extraindo dados da tabela `tb_mynote`
--

INSERT INTO `tb_mynote` (`mynoteId`, `mynoteUserId`, `mynotePalestraDadoId`, `mynotePalestraDadoTitulo`, `mynoteNote`, `mynoteStatus`) VALUES
(6, 8, 0, '', 'Hhhhhhh', 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_palestrantes`
--

CREATE TABLE IF NOT EXISTS `tb_palestrantes` (
  `palestrantesId` int(11) NOT NULL AUTO_INCREMENT,
  `palestrantesTipo` int(11) NOT NULL,
  `palestrantesNome` varchar(50) DEFAULT NULL,
  `palestrantesDescricao` text,
  `palestrantesFoto` varchar(50) DEFAULT NULL,
  `palestrantesData` datetime NOT NULL,
  `palestrantesStatus` int(11) DEFAULT NULL,
  PRIMARY KEY (`palestrantesId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=19 ;

--
-- Extraindo dados da tabela `tb_palestrantes`
--

INSERT INTO `tb_palestrantes` (`palestrantesId`, `palestrantesTipo`, `palestrantesNome`, `palestrantesDescricao`, `palestrantesFoto`, `palestrantesData`, `palestrantesStatus`) VALUES
(0, 1, 'System', NULL, '', '0000-00-00 00:00:00', 1),
(1, 0, 'Time Pfizer', 'Time Pfizer', '', '0000-00-00 00:00:00', 1),
(4, 0, 'Dr. Clovis Arns da Cunha', 'Professor de Doencas Infecciosas, Hospital de Clinicas da UFPR, Curitiba, Brasil', '', '0000-00-00 00:00:00', 1),
(10, 0, 'Dr Ederlon Rezende', 'Diretor do Departamento de Terapia Intensiva do Hospital do Servidor Publico Estadual de Sao Paulo', '', '0000-00-00 00:00:00', 1),
(11, 0, 'Dr. David Nicolau', 'sem dados', '', '0000-00-00 00:00:00', 1),
(12, 0, 'Todos os coordenadores', 'Todos os coordenadores', '', '0000-00-00 00:00:00', 1),
(13, 0, 'breack', 'breack', '', '0000-00-00 00:00:00', 1),
(14, 0, 'Dr. Mauro Salles', 'sem dados', '', '0000-00-00 00:00:00', 1),
(15, 0, 'Dr. Felipe Tuon', '<p>Professor de Epidemiologia da UFPR</p>\n<p>Infectologista do Hospital de Clinicas da UFPR</p>\n<p>Coordenador do SCIH do Hospital Evang&eacute;lico de Curitiba</p>', '', '0000-00-00 00:00:00', 1),
(16, 0, 'Dr. Mauro Salles & Dr. Felipe Tuon', 'Dr. Mauro Salles & Dr. Felipe Tuon', '', '0000-00-00 00:00:00', 1),
(17, 0, 'Dr. Clovis Cunha & Dr. Ederlon Rezende', 'Dr. Clovis Cunha & Dr. Ederlon Rezende', '', '0000-00-00 00:00:00', 1),
(18, 0, 'Dr. Clovis Cunha / Dr. David Nicolau', 'Dr. Clovis Cunha / Dr. David Nicolau', '', '0000-00-00 00:00:00', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_palestras`
--

CREATE TABLE IF NOT EXISTS `tb_palestras` (
  `palestrasId` int(11) NOT NULL AUTO_INCREMENT,
  `palestrasTipo` int(11) DEFAULT NULL,
  `palestrasTitulo` varchar(255) DEFAULT NULL,
  `palestrasDescricao` text,
  `palestrasData` varchar(50) DEFAULT NULL,
  `palestrasHora` varchar(30) DEFAULT NULL,
  `palestrasStatus` int(11) DEFAULT NULL,
  PRIMARY KEY (`palestrasId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=46 ;

--
-- Extraindo dados da tabela `tb_palestras`
--

INSERT INTO `tb_palestras` (`palestrasId`, `palestrasTipo`, `palestrasTitulo`, `palestrasDescricao`, `palestrasData`, `palestrasHora`, `palestrasStatus`) VALUES
(15, 3, ' Plenaria - Casa da Torre A+B <br >Boas Vindas ao Programa e Apresenta&ccedil;&atilde;o da Mesa', 'Plenaria - Casa da Torre A+B Boas Vindas ao Programa e Apresenta&ccedil;&atilde;o da Mesa', '25', '16h00-16h10', 1),
(16, 1, 'Onde estamos agora? Pesquisa Local', 'Onde estamos agora? Pesquisa Local', '25', '16h10-16h40', 1),
(18, 1, 'A individualiza&ccedil;&atilde;o da Terapia na Sepse Grave', 'A individualiza&ccedil;&atilde;o da Terapia na Sepse Grave', '25', '16h40-17h10', 1),
(19, 1, 'Import&acirc;ncia PK/PD atualmente e a individualiza&ccedil;&atilde;o da terapia antimicrobiana', 'Import&acirc;ncia PK/PD atualmente e a individualiza&ccedil;&atilde;o da terapia antimicrobiana', '25', '17h10-17h40', 1),
(21, 1, 'Perguntas e Respostas', 'Perguntas e Respostas', '25', '17h40-18h00', 1),
(22, 2, 'Coffee Break', 'Coffee Break', '25', '18h00-18h30', 1),
(23, 1, 'Recentes Estudos para Manejo da Sepse', 'Recentes Estudos para Manejo da Sepse', '25', '18h30-19h00', 1),
(24, 1, 'Infec&ccedil;&otilde;es bacterianas: epidemiologia e desafios na realidade brasileira', 'Infec&ccedil;&otilde;es bacterianas: epidemiologia e desafios na realidade brasileira', '25', '19h00-19h30', 1),
(25, 2, 'Get together (Coquetel)', 'Get together (Coquetel)', '25', '20h00', 1),
(33, 3, 'Abertura', 'Abertura', '26', '9h00-9h10', 1),
(34, 1, 'Novidades: Papers recentes e relevantes em CSSTI e partes moles Complicadas', 'Novidades: Papers recentes e relevantes em CSSTI e partes moles Complicadas', '26', '9h10-9h40', 1),
(35, 1, 'Infec&ccedil;&otilde;es em grupos de pacientes espec&iacute;ficos - O paciente    Queimado', 'Infec&ccedil;&otilde;es em grupos de pacientes espec&iacute;ficos - O paciente    Queimado', '26', '9h40-10h10', 1),
(36, 1, 'Pneumonia    hospitalar por MRSA: Experi&ecirc;ncia cl&iacute;nica da linezolida no Brasil', 'Pneumonia    hospitalar por MRSA: Experi&ecirc;ncia cl&iacute;nica da linezolida no Brasil', '26', '10h10-10h40', 1),
(37, 2, 'Casos cl&iacute;nicos: Divis&atilde;o de sala', 'Casos cl&iacute;nicos: Divis&atilde;o de sala', '26', '10h40-10h45', 1),
(38, 1, 'Sala 1: Casos desafiadores em pacientes com cSSTI e Partes Moles    complicadas', 'Sala 1: Casos desafiadores em pacientes com cSSTI e Partes Moles    complicadas', '26', '10h45-11h15', 1),
(39, 1, 'Sala 2: Caso em PN', 'Sala 2: Caso em PN', '26', '10h45-11h15', 1),
(40, 2, 'Coffee Break', 'Coffee Break', '26', '11h15-11h45', 1),
(41, 1, 'Sala 1: Caso em PN', 'Sala 1: Caso em PN', '26', '11h45-12h10', 1),
(42, 1, 'Sala 2: CA-MRSA', 'Sala 2: CA-MRSA', '26', '11h45-12h10', 1),
(43, 1, 'Perguntas e Respostas', 'Perguntas e Respostas', '26', '12h10 - 12h30', 1),
(44, 1, 'Fechamento', 'Fechamento', '26', '12h30 - 12h50', 1),
(45, 2, 'Almo&ccedil;o', 'Almo&ccedil;o', '26', '13:00h', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_palestras_palestrantes`
--

CREATE TABLE IF NOT EXISTS `tb_palestras_palestrantes` (
  `palestras_palestrantesId` int(11) NOT NULL AUTO_INCREMENT,
  `palestras_palestrantesPalestrasId` int(11) NOT NULL,
  `palestras_palestrantesPalestrantesId` int(11) NOT NULL,
  `palestras_palestrantesData` datetime NOT NULL,
  `palestras_palestrantesStatus` int(11) NOT NULL,
  PRIMARY KEY (`palestras_palestrantesId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=62 ;

--
-- Extraindo dados da tabela `tb_palestras_palestrantes`
--

INSERT INTO `tb_palestras_palestrantes` (`palestras_palestrantesId`, `palestras_palestrantesPalestrasId`, `palestras_palestrantesPalestrantesId`, `palestras_palestrantesData`, `palestras_palestrantesStatus`) VALUES
(29, 15, 4, '0000-00-00 00:00:00', 1),
(30, 16, 4, '0000-00-00 00:00:00', 1),
(31, 18, 10, '0000-00-00 00:00:00', 1),
(42, 19, 11, '0000-00-00 00:00:00', 1),
(43, 21, 12, '0000-00-00 00:00:00', 1),
(44, 22, 13, '0000-00-00 00:00:00', 1),
(45, 23, 10, '0000-00-00 00:00:00', 1),
(46, 24, 4, '0000-00-00 00:00:00', 1),
(47, 25, 13, '0000-00-00 00:00:00', 1),
(48, 0, 4, '0000-00-00 00:00:00', 0),
(49, 33, 4, '0000-00-00 00:00:00', 0),
(50, 34, 14, '0000-00-00 00:00:00', 0),
(51, 35, 15, '0000-00-00 00:00:00', 0),
(52, 36, 4, '0000-00-00 00:00:00', 0),
(53, 37, 13, '0000-00-00 00:00:00', 0),
(54, 38, 16, '0000-00-00 00:00:00', 0),
(55, 39, 17, '0000-00-00 00:00:00', 0),
(56, 40, 13, '0000-00-00 00:00:00', 0),
(57, 41, 18, '0000-00-00 00:00:00', 0),
(58, 42, 16, '0000-00-00 00:00:00', 0),
(59, 43, 12, '0000-00-00 00:00:00', 0),
(60, 44, 4, '0000-00-00 00:00:00', 0),
(61, 45, 13, '0000-00-00 00:00:00', 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_perfil`
--

CREATE TABLE IF NOT EXISTS `tb_perfil` (
  `perfilId` int(11) NOT NULL AUTO_INCREMENT,
  `perfilNome` varchar(100) NOT NULL,
  `perfilData` datetime NOT NULL,
  `perfilStatus` int(11) NOT NULL,
  PRIMARY KEY (`perfilId`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=37 ;

--
-- Extraindo dados da tabela `tb_perfil`
--

INSERT INTO `tb_perfil` (`perfilId`, `perfilNome`, `perfilData`, `perfilStatus`) VALUES
(1, 'God', '0000-00-00 00:00:00', 0),
(7, 'Diretor Estrat&eacute;gico', '2011-04-25 16:09:02', 0),
(8, 'Cria&ccedil;&atilde;o Estrat&eacute;gica', '2011-07-25 13:00:40', 0),
(36, 'Administrador Vip4All', '2013-02-17 23:20:28', 0),
(35, 'Administrador Vip4All', '2013-02-17 21:42:40', 0),
(34, 'Estagi&aacute;rios', '2012-11-30 01:31:48', 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_perfil_empresas`
--

CREATE TABLE IF NOT EXISTS `tb_perfil_empresas` (
  `perfil_empresasId` int(11) NOT NULL AUTO_INCREMENT,
  `perfil_empresasEmpresasId` int(11) NOT NULL,
  `perfil_empresasPerfilId` int(11) NOT NULL,
  `perfil_empresasData` datetime NOT NULL,
  `perfil_empresasStatus` int(11) NOT NULL,
  PRIMARY KEY (`perfil_empresasId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Extraindo dados da tabela `tb_perfil_empresas`
--

INSERT INTO `tb_perfil_empresas` (`perfil_empresasId`, `perfil_empresasEmpresasId`, `perfil_empresasPerfilId`, `perfil_empresasData`, `perfil_empresasStatus`) VALUES
(1, 1, 1, '0000-00-00 00:00:00', 0),
(2, 1, 7, '0000-00-00 00:00:00', 0),
(3, 1, 8, '0000-00-00 00:00:00', 0),
(4, 2, 1, '0000-00-00 00:00:00', 0),
(5, 2, 7, '0000-00-00 00:00:00', 0),
(6, 2, 8, '0000-00-00 00:00:00', 0),
(7, 1, 34, '2012-11-30 01:31:48', 1),
(8, 1, 36, '2013-02-17 23:20:28', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_perfil_modulos_empresas`
--

CREATE TABLE IF NOT EXISTS `tb_perfil_modulos_empresas` (
  `perfil_modulosEmpresasId` int(11) NOT NULL,
  `perfil_modulosPerfilId` int(11) NOT NULL,
  `perfil_modulosModulosId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Extraindo dados da tabela `tb_perfil_modulos_empresas`
--

INSERT INTO `tb_perfil_modulos_empresas` (`perfil_modulosEmpresasId`, `perfil_modulosPerfilId`, `perfil_modulosModulosId`) VALUES
(1, 1, 2),
(1, 1, 1),
(1, 7, 2),
(2, 7, 1),
(1, 1, 72),
(1, 1, 75),
(1, 7, 75),
(1, 8, 75),
(1, 34, 1),
(1, 34, 75),
(1, 1, 77),
(1, 7, 77),
(1, 8, 77),
(1, 34, 77),
(1, 1, 78),
(1, 1, 79),
(1, 1, 80),
(1, 7, 80),
(1, 1, 81),
(1, 1, 82),
(1, 1, 83),
(1, 1, 84),
(1, 1, 85),
(1, 36, 1),
(1, 36, 84);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_perguntas`
--

CREATE TABLE IF NOT EXISTS `tb_perguntas` (
  `perguntasId` int(11) NOT NULL AUTO_INCREMENT,
  `perguntasUserId` int(11) NOT NULL,
  `perguntasNomeUsuario` varchar(50) NOT NULL,
  `perguntasTexto` text NOT NULL,
  `perguntasData` datetime NOT NULL,
  `perguntasStatus` int(11) NOT NULL,
  PRIMARY KEY (`perguntasId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Extraindo dados da tabela `tb_perguntas`
--

INSERT INTO `tb_perguntas` (`perguntasId`, `perguntasUserId`, `perguntasNomeUsuario`, `perguntasTexto`, `perguntasData`, `perguntasStatus`) VALUES
(3, 8, 'Carlos Vicente Serrano', 'chsghdfhdfh', '2014-07-18 22:08:51', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_pesquisas`
--

CREATE TABLE IF NOT EXISTS `tb_pesquisas` (
  `pesquisasId` int(11) NOT NULL AUTO_INCREMENT,
  `pesquisasUserId` int(11) NOT NULL,
  `pesquisasUserNome` varchar(200) NOT NULL,
  `pesquisasPergunta` text NOT NULL,
  `pesquisasResposta` text NOT NULL,
  `pesquisasData` datetime NOT NULL,
  `pesquisasStatus` int(11) NOT NULL,
  PRIMARY KEY (`pesquisasId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_redirect_telas`
--

CREATE TABLE IF NOT EXISTS `tb_redirect_telas` (
  `redirect_telasId` int(11) NOT NULL AUTO_INCREMENT,
  `redirect_telasTelaId` int(11) NOT NULL,
  `redirect_telasFolder` varchar(30) NOT NULL,
  `redirect_telasLink` varchar(100) NOT NULL,
  `redirect_telasData` datetime NOT NULL,
  `redirect_telasStatus` int(11) NOT NULL,
  PRIMARY KEY (`redirect_telasId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=36 ;

--
-- Extraindo dados da tabela `tb_redirect_telas`
--

INSERT INTO `tb_redirect_telas` (`redirect_telasId`, `redirect_telasTelaId`, `redirect_telasFolder`, `redirect_telasLink`, `redirect_telasData`, `redirect_telasStatus`) VALUES
(1, 1, 'usuarios', 'usuarios/index.php', '0000-00-00 00:00:00', 0),
(2, 2, 'modulos', 'modulos/index.php', '0000-00-00 00:00:00', 0),
(19, 19, 'eventos', 'eventos/index.php', '0000-00-00 00:00:00', 0),
(23, 23, 'parceiros', 'parceiros/index.php', '0000-00-00 00:00:00', 0),
(24, 24, 'clientes', 'clientes/index.php', '0000-00-00 00:00:00', 0),
(25, 25, 'fornecedores', 'fornecedores/index.php', '0000-00-00 00:00:00', 0),
(26, 26, 'departamentos', 'departamentos/index.php', '0000-00-00 00:00:00', 0),
(27, 27, 'orcamento', 'orcamento/index.php', '0000-00-00 00:00:00', 0),
(28, 28, 'coordenacao', 'coordenacao/index.php', '0000-00-00 00:00:00', 0),
(29, 29, 'bancoHoras', 'bancoHoras/index.php', '0000-00-00 00:00:00', 0),
(30, 30, 'quilometragem', 'quilometragem/index.php', '0000-00-00 00:00:00', 0),
(31, 31, 'compras', 'compras/index.php', '0000-00-00 00:00:00', 0),
(32, 28, 'coordenadores', 'coordenadores/index.php', '0000-00-00 00:00:00', 0),
(33, 32, 'relatorio', 'relatorio/index.php', '0000-00-00 00:00:00', 0),
(34, 33, 'eventos', 'eventos/index.php', '0000-00-00 00:00:00', 0),
(35, 34, 'coordenadores', 'coordenadores/index.php', '0000-00-00 00:00:00', 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_salas`
--

CREATE TABLE IF NOT EXISTS `tb_salas` (
  `salasId` int(11) NOT NULL AUTO_INCREMENT,
  `salasGrupo` varchar(10) NOT NULL,
  `salasNome` varchar(100) NOT NULL,
  `salasNomeReal` varchar(100) NOT NULL,
  `salasNomeB` varchar(50) NOT NULL,
  `salasNomeRealB` varchar(50) NOT NULL,
  `salasQuantidade` int(11) NOT NULL,
  `salasQuantidade2` int(11) NOT NULL,
  `salasPorta` varchar(50) NOT NULL,
  `salasData` datetime NOT NULL,
  `salasStatus` int(11) NOT NULL,
  PRIMARY KEY (`salasId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=16 ;

--
-- Extraindo dados da tabela `tb_salas`
--

INSERT INTO `tb_salas` (`salasId`, `salasGrupo`, `salasNome`, `salasNomeReal`, `salasNomeB`, `salasNomeRealB`, `salasQuantidade`, `salasQuantidade2`, `salasPorta`, `salasData`, `salasStatus`) VALUES
(9, 'A0', 'Plenaria', 'Ariano Suassuna', '', '', 0, 0, '3000', '0000-00-00 00:00:00', 1),
(10, '', 'DM1_A', 'Francisco Brennand 1', 'DM1_A', 'Francisco Brennand 1', 0, 0, '3004', '0000-00-00 00:00:00', 0),
(11, '', 'DM1_B', 'Francisco Brennand 2', 'DM1_B', 'Francisco Brennand 2', 0, 0, '3003', '0000-00-00 00:00:00', 0),
(12, '', 'DM2_A', 'Francisco Brennand 3', 'DM2_B', 'Francisco Brennand 4', 0, 0, '3002', '0000-00-00 00:00:00', 0),
(13, '', 'DM2_B', 'Francisco Brennand 4', 'DM2_A', 'Francisco Brennand 3', 0, 0, '3001', '0000-00-00 00:00:00', 0),
(14, '', 'DM2_C', 'Francisco Brennand 5', 'DM2_D', 'Francisco Brennand 6', 0, 0, '3005', '0000-00-00 00:00:00', 0),
(15, '', 'DM2_D', 'Francisco Brennand 6', 'DM2_C', 'Francisco Brennand 5', 0, 0, '3005', '0000-00-00 00:00:00', 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_usuarios`
--

CREATE TABLE IF NOT EXISTS `tb_usuarios` (
  `usuariosId` int(11) NOT NULL AUTO_INCREMENT,
  `usuariosTipo` varchar(10) DEFAULT NULL,
  `usuariosGrupo` varchar(3) DEFAULT NULL,
  `usuariosEmpresasId` varchar(10) DEFAULT NULL,
  `usuariosNome` varchar(43) DEFAULT NULL,
  `usuariosEmail` varchar(255) DEFAULT NULL,
  `usuariosLogin` varchar(10) DEFAULT NULL,
  `usuariosSenha` varchar(10) DEFAULT NULL,
  `usuariosTelefone` varchar(10) DEFAULT NULL,
  `usuariosCrm` varchar(30) NOT NULL,
  `usuariosPerfilId` varchar(10) DEFAULT NULL,
  `usuariosData` varchar(10) DEFAULT NULL,
  `usuariosStatus` varchar(10) DEFAULT NULL,
  `usuariosDataVolta` varchar(11) DEFAULT NULL,
  `usuariosOrigem` varchar(6) DEFAULT NULL,
  `usuariosCia` varchar(7) DEFAULT NULL,
  `usuariosVoo` varchar(14) DEFAULT NULL,
  `usuariosSaida` varchar(5) DEFAULT NULL,
  `usuariosChegada` varchar(5) DEFAULT NULL,
  `usuariosDestino` varchar(13) DEFAULT NULL,
  `usuariosLocalizador` varchar(7) DEFAULT NULL,
  `usuariosEticket` varchar(17) DEFAULT NULL,
  `usuariosTransfer` varchar(255) DEFAULT NULL,
  `usuariosCheckOut` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`usuariosId`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=138 ;

--
-- Extraindo dados da tabela `tb_usuarios`
--

INSERT INTO `tb_usuarios` (`usuariosId`, `usuariosTipo`, `usuariosGrupo`, `usuariosEmpresasId`, `usuariosNome`, `usuariosEmail`, `usuariosLogin`, `usuariosSenha`, `usuariosTelefone`, `usuariosCrm`, `usuariosPerfilId`, `usuariosData`, `usuariosStatus`, `usuariosDataVolta`, `usuariosOrigem`, `usuariosCia`, `usuariosVoo`, `usuariosSaida`, `usuariosChegada`, `usuariosDestino`, `usuariosLocalizador`, `usuariosEticket`, `usuariosTransfer`, `usuariosCheckOut`) VALUES
(29, '', '', '', 'Ida Vanessa Doederlein Schwartz', 'ida.ez@terra.com.br , ischwartz@hcpa.ufrgs.br', '', '', '51-9901.74', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 1),
(28, '', '', '', 'Heloisa Veasey', 'heloisa.rodrigues@einstein.br', '', '', '', '', '', '', '0', '', '', '', '', '', '', '', '', '', '', 1),
(27, '', '', '', 'Hazem Adel Ashawi', 'hazem.ashmawi@hc.fm.usp.br', '', '', '(11)96623-', '', '', '', '0', '', '', '', '', '', '', '', '', '', '', 1),
(26, '', '', '', 'Gilda Porta ', 'gildaporta@gmail.com', '', '', '11-99632-0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0),
(25, '', '', '', 'Gilberto Castro', 'gcastrojr@terra.com.br', '', '', '11 9996852', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0),
(24, '', '', '', 'Geraldo Castelar', 'geraldo.castelar@gmail.com', '', '', '21-9177373', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 1),
(23, '', '', '', 'Francisco Antonio Helfenstein Fonseca', 'fahfonseca@terra.com.br', '', '', '', '', '', '', '0', '', '', '', '', '', '', '', '', '', '', 1),
(22, '', '', '', 'Flavio Mavignier Carcano', 'fmcmed@globo.com', '', '', '17 9629129', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 1),
(21, '', '', '', 'Flavio Maciel', 'fmaciel@usp.br', '', '', '11-9844442', '', '', '', '0', '', '', '', '', '', '', '', '', '', '', 1),
(20, '', '', '', 'Flavio da Silva Ferreira', 'flaviosferreira@uol.com.br', '', '', '(11)98415-', '', '', '', '0', '', '', '', '', '', '', '', '', '', '', 1),
(19, '', '', '', 'Fatima Paim', 'mfatimapaim@gmail.com', '', '', '071-961768', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 0),
(18, '', '', '', 'Fabio Schutz', 'fabio.schutz@hospitalsjose.org.br', '', '', '11 9819822', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 0),
(17, '', '', '', 'Fabio Leite', 'drfabioleite@hotmail.com', '', '', '17 9601357', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 1),
(16, '', '', '', 'Fabianne Altruda de Moraes Costa Carlesse', 'fabiannecarlesse@hotmail.com', '', '', '', '', '', '', '0', '', '', '', '', '', '', '', '', '', '', 1),
(15, '', '', '', 'Eitan N. Berezin', 'berezin@terra.com.br', '', '', '(11) 3258-', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 1),
(14, '', '', '', 'Egberto Reis Barbosa', '', '', '', '11-97200-7', '', '', '', '0', '', '', '', '', '', '', '', '', '', '', 0),
(13, '', '', '', 'Daniel Munhoz', 'dbmunhoz@gmail.com', '', '', '19 9875-06', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 1),
(12, '', '', '', 'CRISTIANO MELO GAMBA', 'cristianogamba@gmail.com', '', '', '11 9814298', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 1),
(11, '', '', '', 'Cristiano Faria Pisani', 'cristianopisani@gmail.com ', '', '', ' (11) 9964', '', '', '', '0', '', '', '', '', '', '', '', '', '', '', 1),
(10, '', '', '', 'Claudio Penido Campos Junior ', 'claudio.penido@terra.com.br', '', '', '17 9772811', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 0),
(9, '', '', '', 'Clarice Machado', 'clarimm@usp.br', '', '', '', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 0),
(8, '', '', '', 'Carlos Vicente Serrano ', 'cvserranojr@gmail.com', '', '', '', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 0),
(7, '', '', '', 'Cacilda Souza', 'cssouza@fmrp.usp.br', '', '', '16-9788025', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 0),
(6, '', '', '', 'Bernardo Maranhao', 'b.c.maranhao@uol.com.br', '', '', '21 8153 56', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 1),
(5, '', '', '', 'Angela Maria de Sousa', 'angela.sousa@icesp.org.br', '', '', '(11)98558-', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 1),
(4, '', '', '', 'Aguinaldo Nardi', 'aguinaldonardi@gmail.com', '', '', '', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 1),
(3, '', '', '', 'Adriana Porro', 'adriana.porro@uol.com.br', '', '', '11-7632-15', '54292', '', '', '1', '', '', '', '', '', '', '', '', '', '', 0),
(2, '', '', '', 'Adilson Faccio', 'adilsonfaccio@gmail.com', '', '', '16 8152711', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 0),
(1, '', '', '', 'Adalberto Lorga Filho', 'lorgafilho@terra.com.br', '', '', '', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 0),
(30, '', '', '', 'Irimar de Paula Posso', 'irimar@terra.com.br', '', '', '(11)98322-', '', '', '', '0', '', '', '', '', '', '', '', '', '', '', 1),
(31, '', '', '', 'Jadelson Pinheiro de Andrade', 'jadelson@cardiol.br', '', '', '(71) 8149-', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0),
(32, '', '', '', 'Jorge Winkler', 'jlwinckler@hotmail.com ', '', '', '51-8449-84', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 1),
(33, '', '', '', 'Jose Mendes Aldrighi', 'jmaldri@usp.br', '', '', '011-99985-', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0),
(34, '', '', '', 'Jose Rocha Faria Neto', 'jose.faria@pucpr.br', '', '', '', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 1),
(35, '', '', '', 'Jose Rodrigues', 'joserp@uol.com.br', '', '', '11-9845594', '', '', '', '0', '', '', '', '', '', '', '', '', '', '', 1),
(36, '', '', '', 'Kalil Duailibi', 'kalilduailibi@uol.com.br', '', '', '11-99968-9', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 1),
(37, '', '', '', 'Luana Menegheli', 'lupmene@yahoo.com.br', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0),
(38, '', '', '', 'Luciana Sarin', 'lusarin@terra.com.br', '', '', '11-99995-1', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 1),
(39, '', '', '', 'Luisa Terroni', 'luterroni@gmail.com', '', '', '', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 1),
(40, '', '', '', 'Manoel Bertolo', 'manoelbb@fcm.unicamp.br', '', '', '19-9605024', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0),
(41, '', '', '', 'Manoel Jacobsen', '', '', '', '11-99971-1', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0),
(42, '', '', '', 'Marcia Waddington Cruz', 'mwaddingtoncruz@gmail.com', '', '', '(21)992370', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 1),
(43, '', '', '', 'Marcos Andre', 'mandre_med@yahoo.com.br', '', '', '11 7769976', '', '', '', '0', '', '', '', '', '', '', '', '', '', '', 1),
(44, '', '', '', 'Maria Daniela Di Dea Bergamasco', 'danididea@uol.com.br', '', '', '11 9882555', '', '', '', '0', '', '', '', '', '', '', '', '', '', '', 1),
(45, '', '', '', 'MARIA DE FATIMA SILVA DE LIMA', 'fal.lima89@gmail.com', '', '', '81-9145-34', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 1),
(46, '', '', '', 'Mauro Salles', 'mcsalles@osite.com.br', '', '', '', '', '', '', '0', '', '', '', '', '', '', '', '', '', '', 1),
(47, '', '', '', 'Milton Helfeinstein Jr', 'm.helfen@terra.com.br', '', '', '(11)99102-', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 1),
(48, '', '', '', 'Morton Scheinberg', 'morton@osite.com.br', '', '', '11-9818187', '', '', '', '0', '', '', '', '', '', '', '', '', '', '', 1),
(49, '', '', '', 'Patricia Rady Muller', 'patyrm@me.com', '', '', '11 9812175', '', '', '', '0', '', '', '', '', '', '', '', '', '', '', 1),
(50, '', '', '', 'Paulo Cesar Grandini', 'paulograndini@terra.com.br ', '', '', '16 9772005', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0),
(51, '', '', '', 'Renata Vasconcelos', 'renata.vasconcelos13@gmail.com', '', '', '(21)962189', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 1),
(52, '', '', '', 'RICARDO ARIEL ZIMERMAN', 'ricardoarielzimerman@yahoo.com.br', '', '', ' 51 931871', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0),
(53, '', '', '', 'Ricardo Xavier', 'rmaxavier@hcpa.ufrgs.br', '', '', '51-9698550', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 1),
(54, '', '', '', 'Rina Dalva', 'rinadalva@hotmail.com', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0),
(55, '', '', '', 'Roberto Heymann', 'heymann@netpoint.com.br', '', '', '(11)99647-', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 1),
(56, '', '', '', 'Rodolfo Strufaldi', 'rostrufaldi@gmail.com', '', '', '011-99987-', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 1),
(57, '', '', '', 'Shenia Sbardellotto Colnaghi Novis', 'sheniacolnaghi@yahoo.com.br', '', '', '(21)989149', '', '', '', '0', '', '', '', '', '', '', '', '', '', '', 1),
(58, '', '', '', 'Silvio Alencar', 'smarques@fmb.unesp.br', '', '', '14-9671024', '', '', '', '0', '', '', '', '', '', '', '', '', '', '', 1),
(59, '', '', '', 'Valderilio Azevedo', 'valderilio@hotmail.com', '', '', '41-9985342', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 1),
(60, '', '', '', 'Valeria Braile ', 'valeria@braile.com.br', '', '', '17-8132-56', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0),
(61, '', '', '', 'Victor Rodrigues', 'dr.victorrodrigues@yahoo.com.br', '', '', '', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 1),
(62, '', '', '', 'Adriana Polycarpo Ribeiro', '', '', '', '', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 0),
(63, '', '', '', 'Anderson C Souza', '', '', '', '', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 0),
(64, '', '', '', 'Andreia Assis', '', '', '', '', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 0),
(65, '', '', '', 'Bruna Marreiro ', '', '', '', '', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 0),
(66, '', '', '', 'Caroline Riera Conte ', '', '', '', '', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 0),
(67, '', '', '', 'Claudenice Souza', '', '', '', '', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 0),
(68, '', '', '', 'Demetrio Rumi ', '', '', '', '', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 0),
(69, '', '', '', 'Erick Sagioma', '', '', '', '', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', 0),
(70, '', '', '', 'Eurico Correia', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0),
(71, '', '', '', 'Fabricio Furlan', '', '', '', '', '', '', '', '0', '', '', '', '', '', '', '', '', '', '', 0),
(72, '', '', '', 'Fernando P. Goncalves', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0),
(73, '', '', '', 'Flavio Azank', '', '', '', '', '', '', '', '0', '', '', '', '', '', '', '', '', '', '', 1),
(74, '', '', '', 'Gabriela Cezar', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0),
(75, '', '', '', 'Glauco Marcondes ', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0),
(76, '', '', '', 'Graziela Lanzara', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0),
(77, '', '', '', 'Jacqueline P. Bezerra Silva', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0),
(78, '', '', '', 'Luciana Sobral', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0),
(79, '', '', '', 'Marcio Elias', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0),
(80, '', '', '', 'Mariana Lima', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0),
(81, '', '', '', 'Marilia Pelinson', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0),
(82, '', '', '', 'Marjori Dulcine', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0),
(83, '', '', '', 'Maysa Silva Arruda', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0),
(84, '', '', '', 'Nadia Lombardi', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0),
(85, '', '', '', 'Priscila Beja', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0),
(86, '', '', '', 'Priscila Vernier', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0),
(87, '', '', '', 'Priscilla Beja', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0),
(88, '', '', '', 'Regina Recchia', '', '', '', '', '', '', '', '0', '', '', '', '', '', '', '', '', '', '', 0),
(89, '', '', '', 'Solange Ap. S. de Almeida ', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0),
(90, '', '', '', 'Tamara Teixeira ', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0),
(91, '', '', '', 'Tatiana Drewiacki', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0),
(92, '', '', '', 'Yve Gea', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0),
(128, NULL, NULL, '', 'Maria Paula', 'mariapaula@benhurmd.com.br', '', '', '11 9996615', '98555-sp', '', '2013-08-23', '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(129, NULL, NULL, '', 'Maria Paula', 'mariapaula@benhurmd.com.br', '', '', '11 9996615', '98555-sp', '', '2013-08-23', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(130, NULL, NULL, '', 'Cacilda Souza', 'cssouza@fmrp.usp.br', '', '', '16- 978802', '52027-sp', '', '2013-08-23', '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0),
(131, NULL, NULL, '', 'Adriana Porro', 'adriana.porro@uol.com.br', '', '', '1197632150', '54292', '', '2013-08-23', '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(132, NULL, NULL, '', 'Marina Moraes', 'mariresener@hotmail.com', '', '', '51 9714071', '34480', '', '2013-08-23', '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(133, NULL, NULL, '', 'Marina Moraes', 'mariresener@hotmail.com', '', '', '51 9714071', '34480', '', '2013-08-23', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(134, NULL, NULL, '', 'Andreza Senerchia', 'andrezasenerchia@graacc.org.br', '', '', '11 9821680', '125052', '', '2013-08-23', '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0),
(135, NULL, NULL, '', 'Andreza Senerchia', 'andrezasenerchia@graacc.org.br', '', '', '11 9821680', '125052', '', '2013-08-23', '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(136, NULL, NULL, '', 'Florentino Cardoso', 'florentinocardoso@terra.com.br', '', '', '1198906201', '4321-CE', '', '2013-08-23', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(137, NULL, NULL, NULL, 'Alan', 'Alan@alam.com', NULL, NULL, '334433', '', NULL, '2014-07-17', '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_usuarios_estudos`
--

CREATE TABLE IF NOT EXISTS `tb_usuarios_estudos` (
  `usuarios_estudosId` int(11) NOT NULL AUTO_INCREMENT,
  `usuarios_estudosUsuariosId` int(11) NOT NULL,
  `usuarios_estudosEstudosId` int(11) NOT NULL,
  `usuarios_estudosData` datetime NOT NULL,
  `usuarios_estudosStatus` int(11) NOT NULL,
  PRIMARY KEY (`usuarios_estudosId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=20 ;

--
-- Extraindo dados da tabela `tb_usuarios_estudos`
--

INSERT INTO `tb_usuarios_estudos` (`usuarios_estudosId`, `usuarios_estudosUsuariosId`, `usuarios_estudosEstudosId`, `usuarios_estudosData`, `usuarios_estudosStatus`) VALUES
(9, 66, 26, '0000-00-00 00:00:00', 1),
(10, 66, 46, '0000-00-00 00:00:00', 1),
(11, 67, 46, '0000-00-00 00:00:00', 1),
(12, 67, 47, '0000-00-00 00:00:00', 1),
(13, 67, 48, '0000-00-00 00:00:00', 1),
(14, 67, 49, '0000-00-00 00:00:00', 1),
(15, 65, 26, '0000-00-00 00:00:00', 1),
(16, 65, 47, '0000-00-00 00:00:00', 1),
(17, 65, 49, '0000-00-00 00:00:00', 1),
(18, 8, 26, '0000-00-00 00:00:00', 1),
(19, 8, 46, '0000-00-00 00:00:00', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_usuarios_salas`
--

CREATE TABLE IF NOT EXISTS `tb_usuarios_salas` (
  `usuarios_salasId` int(11) NOT NULL AUTO_INCREMENT,
  `usuarios_salasUsuariosId` int(11) NOT NULL,
  `usuarios_salasSalasId` int(11) NOT NULL,
  `usuarios_salasData` datetime NOT NULL,
  `usuarios_salasStatus` int(11) NOT NULL,
  PRIMARY KEY (`usuarios_salasId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_votacao`
--

CREATE TABLE IF NOT EXISTS `tb_votacao` (
  `votacaoId` int(11) NOT NULL AUTO_INCREMENT,
  `votacaoUsuariosId` int(11) NOT NULL,
  `votacaoCho` varchar(20) NOT NULL,
  `votacaoInsulina` varchar(20) NOT NULL,
  `votacaoQuestaoId` int(11) NOT NULL,
  `votacaoData` datetime NOT NULL,
  `votacaoStatus` int(11) NOT NULL,
  PRIMARY KEY (`votacaoId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=33 ;

--
-- Extraindo dados da tabela `tb_votacao`
--

INSERT INTO `tb_votacao` (`votacaoId`, `votacaoUsuariosId`, `votacaoCho`, `votacaoInsulina`, `votacaoQuestaoId`, `votacaoData`, `votacaoStatus`) VALUES
(13, 72, '  hfgh', 'hfghfg', 0, '0000-00-00 00:00:00', 0),
(14, 72, 'gfhgf', 'hgfhg', 0, '0000-00-00 00:00:00', 0),
(15, 72, 'hgfh', 'fghf', 1, '0000-00-00 00:00:00', 0),
(16, 72, 'ytr', 'yr', 0, '0000-00-00 00:00:00', 0),
(17, 72, 'ewqewq', 'ewqewqewq', 0, '0000-00-00 00:00:00', 0),
(18, 72, '', '', 1, '0000-00-00 00:00:00', 0),
(19, 72, '', '', 0, '0000-00-00 00:00:00', 0),
(20, 72, 'Rfa', 'sdadsa', 4, '0000-00-00 00:00:00', 0),
(21, 72, '33 g', '2 UI', 0, '0000-00-00 00:00:00', 0),
(22, 72, 'sdfds', 'fdsf', 2, '0000-00-00 00:00:00', 0),
(23, 72, 'rew', 'rewwr', 5, '0000-00-00 00:00:00', 0),
(24, 72, 'rew', 'rew', 0, '0000-00-00 00:00:00', 0),
(25, 72, 'das', 'dsa', 5, '0000-00-00 00:00:00', 0),
(26, 6, '', '', 0, '0000-00-00 00:00:00', 0),
(27, 6, '', '', 0, '0000-00-00 00:00:00', 0),
(28, 6, '', '', 1, '0000-00-00 00:00:00', 0),
(29, 33, '', '', 5, '0000-00-00 00:00:00', 0),
(30, 19, '54g', '3 UI', 6, '0000-00-00 00:00:00', 0),
(31, 1, '13', '3', 0, '0000-00-00 00:00:00', 0),
(32, 1, '', '3 UI', 6, '0000-00-00 00:00:00', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
